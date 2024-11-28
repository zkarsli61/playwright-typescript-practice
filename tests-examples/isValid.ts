function isValid(s: string): boolean {

    const stack = []

    const bracketMap: { [key: string]: string } = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (const char of s) {
        if (char in bracketMap) {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;

            const top = stack.pop()!

            if (bracketMap[top] !== char) return false
        }
    }

    return stack.length === 0;
}

console.log(isValid('()['))