// Sentence Smash

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
    if (words === '') {
      return '';
    } else {
      return words.join(" ");
    }
};

//dont even need an if statement.

function smash(words) {
    return words.join(" ");
}