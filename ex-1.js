let words = ["hello", "world"];

function getWordLengths(words) {
  return words.length;
}

const result = words.map(getWordLengths);

console.log(result); // Output: [5, 5]
