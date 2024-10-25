function countWords(sentence: string): Map<string, number> {
    let wordCount = new Map();

    const regex = /[^\s]+/g;
    const words = sentence.toLowerCase().match(regex);

    if (!words || words.length === 0) {
        return wordCount;
    }

    words.forEach((word) => {
        wordCount.set(word, wordCount.get(word) ? wordCount.get(word) + 1 : 1);
    });

    return wordCount;

}

// Example usage
const sentence = "This is a test This test is simple!";
const result = countWords(sentence);
console.log(result);