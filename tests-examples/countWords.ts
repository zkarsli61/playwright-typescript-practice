function countWords(sentence: string): Map<string, number> {
    let wordCount = new Map();

    sentence.split(" ").forEach((word) => {

        if (wordCount.has(word))
            wordCount.set(word, 2)
        else
            wordCount.set(word, 1)
    });

    return wordCount;

}

// Example usage
const sentence = "This is a test. This test is simple!";
const result = countWords(sentence);
console.log(result);