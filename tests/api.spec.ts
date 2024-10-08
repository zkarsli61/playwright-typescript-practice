import test, { expect } from "@playwright/test";
import complexJSON from "../test-data/complex.json";

test("api get response", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users/2")

    const responseBody = JSON.parse(await response.text())

    console.log(responseBody)
    // npx playwright test --only-changed only runs modified/commited files
    // npx playwright test --last-failed only runs last failed tests
    // npx playwright test --ui --debug

    expect(responseBody.data.id).toBe(2)
})

test("validate complex json", async ({ request }) => {
    const expectedKey = ["btc", "eth", "ltc", "usd", "eur"]
    const expectedUnit = ["crypto", "$", "BTC"]
    const expectedType = ["crypto", "fiat"]
    for (let key in complexJSON.rates) {
        //expect(expectedKey.includes(key), `invalid ${key}`).toBeTruthy()
        expect(expectedUnit.includes(complexJSON.rates[key].unit), `invalid unit: ${complexJSON.rates[key].unit}`).toBeTruthy()
        expect(complexJSON.rates[key].name).toBeDefined()
        expect(parseFloat(complexJSON.rates[key].value)).toBeGreaterThan(0)
        expect(expectedType.includes(complexJSON.rates[key].type)).toBeTruthy()
    }
});