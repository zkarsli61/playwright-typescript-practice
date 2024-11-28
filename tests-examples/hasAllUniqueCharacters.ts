function hasAllUniqueChars(word: string) {
    let chars = new Map<string, boolean>()

    for (const ch of word) {
        if (chars.get(ch))
            return false
        chars.set(ch, true);
    }
    return true
}

function hasAllUniqueChars2(word: string) {
    for (let i = 0; i < word.length - 1; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word.charAt(i) === word.charAt(j))
                return false
        }
    }
    return true
}

console.log(hasAllUniqueChars("Hey"));