import { test } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

test('web scrapping for the quotes', async ({ page }) => {
    let arr: string[] = [];
    let q;
    for (let pg = 1; pg <= 100; pg++) {
        await page.goto(`https://1000kitap.com/kitap/sevdalim-hayat--2613/alintilar?hl=tr&s=alintiSayfaSayisi&sayfa=${pg}`);
        const quotes = await page.locator('.bg-alinti-acik .w-full').all();
        for (const [index, quote] of quotes.entries()) {
            q = await quote.textContent();
            q = q?.replace(/\s+/g, ' ')
            q = q?.replace(/["...\r\n]/g, '')
            q = q?.replace(/\s*([,.;?!:])\s*/g, '$1 ')
            if (!arr.includes(q)) {
                arr.push(q)
            }
        }
    }
    const csvContent = arr.join('\r\n');

    // Specify the path where the CSV file will be saved
    const filePath = path.join(__dirname, '../test-data/quotes.csv');

    // Write the CSV content to the file
    fs.writeFile(filePath, csvContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to CSV file:', err);
        } else {
            console.log('CSV file written successfully:', filePath);
        }
    });

})
