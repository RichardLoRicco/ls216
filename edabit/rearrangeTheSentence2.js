/*

Given a sentence with numbers representing a word's location embedded
within each word, return the sorted sentence.

Notes
Only the integers 1-9 will be used.

---

INPUT: a string sentence with numbers embedded in words
RETURN: the sentence sorted according to the numbers embedded within the words
RULES:
- only integers 1-9 are used
- if a space is passed in, return empty string
QUESTIONS:
-

ALGORITHM:
- split sentence into an array of words
- sort each word based on the number value of the
  number contained in each word, in increasing order
- iterate over each word, and replace all digits with ''
- join the words with spaces and return

*/

function rearrange(sentence) {
  if (!sentence.trim()) return "";

  let words = sentence.split(" ");

  words.sort((a, b) => {
    return Number(a.match(/\d/g)[0]) - Number(b.match(/[\d]/g)[0]);
  });

  return words.map((word) => word.replace(/\d/, "")).join(" ");
}

console.log(rearrange("is2 Thi1s T4est 3a")); // ➞ "This is a Test"

console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2")); // ➞ "For the good of the people"

console.log(rearrange(" ")); // ➞ ""
