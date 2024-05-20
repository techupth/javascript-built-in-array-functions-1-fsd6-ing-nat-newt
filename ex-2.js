let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  return words.length >= 5;
}

const result = words.filter(get5CharWords);

console.log(result); // Output: ["apple", "elephant"]
