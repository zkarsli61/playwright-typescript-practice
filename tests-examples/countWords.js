function countWords(sentence) {
    var wordCount = new Map();
    var regex = /[^\s]+/g;
    var words = sentence.toLowerCase().match(regex);
    if (!words || words.length === 0) {
        return wordCount;
    }
    words.forEach(function (word) {
        wordCount.set(word, wordCount.get(word) ? wordCount.get(word) + 1 : 1);
    });
    return wordCount;
}
// Example usage
var sentence = "This is a test This test is simple!";
var result = countWords(sentence);
console.log(result);
