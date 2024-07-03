/*
Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.

Notes:
Only the integers 1-9 will be used.

---

INPUT:
  - a string, consisting of a sentence with numbers denoting a word's location
RETURN:
  - the sentence sorted according to the number embedded within each word
    -> the number denotes the order
RULES:
  - only the numbers 1-9 will be used
  - if empty string input, return empty string
  - will always be passed a string
  - only 1 string digit will occur in each word
  - words are separated by spaces
NOTES:
  - sort using a, b => a.match(/\d/g)[0] - b.match(/\d/g)[0]
  - remove digits by replacing digits with 
STRATEGY:
  - convert to array, sort by number, then remove digits and join
ALGORITHM:
  - split string into array of words, then sort array based on the digits located within each word
  -> map returned array, replacing the digits within each word with ''
  -> join returned mapped array with spaces
*/

function rearrange(sentence) {
  if (sentence.length === 0 || sentence === ' ') return '';

  let sortedWords = sentence.split(' ').sort(sortWords);
  sortedWords = sortedWords.map(word => word.replace(/\d/g, ''));
  return sortedWords.join(' ');
}

function sortWords(a, b) {
  return a.match(/\d/g)[0] - b.match(/\d/g)[0];
}

console.log(rearrange("is2 Thi1s T4est 3a")); // ➞ "This is a Test"

console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2")); // ➞ "For the good of the people"

console.log(rearrange(" ")); // ➞ ""