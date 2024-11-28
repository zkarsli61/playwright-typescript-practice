function plusOne(digits: number[]): number[] {

    const n = digits.length;
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        } else
            digits[i] = 0;
    }
    console.log('Döngüden çıktı')
    digits.unshift(1);
    return digits;
}

console.log(plusOne([9, 9, 9]));
