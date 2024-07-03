/*
A collection of spelling blocks has two letters per block, as shown in this list:


B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

---

INPUT:
- a string of letters
RETURN:
- a boolean
  - true if input can be spelled using set of blocks
  - flse otherwise
RULES:
- words can't use both letters from a given block
  (i.e., can only use each block once)
- letters are case sensitive

NOTES:
- store letters in nested array
- copy array, then remove as we use a letter from each block

---

ALGORITHM:

- iterate over each letter of word: if for all letters the following is true:
- iterate over each block of copy of nested array of letters
  - if block includes letter:
    - remove block
    - return true
- if iteration finishes, return false;

*/

function isBlockWord(word) {
  const letters = [
    ["B", "O"],
    ["X", "K"],
    ["D", "Q"],
    ["C", "P"],
    ["N", "A"],
    ["G", "T"],
    ["R", "E"],
    ["F", "S"],
    ["J", "W"],
    ["H", "U"],
    ["V", "I"],
    ["L", "Y"],
    ["Z", "M"],
  ];

  const lettersCopy = [...letters];

  return word
    .toUpperCase()
    .split("")
    .every((letter) => {
      for (let i = 0; i < lettersCopy.length; i++) {
        let currentBlock = lettersCopy[i];
        if (currentBlock.includes(letter)) {
          lettersCopy.splice(i, 1);
          return true;
        }
      }
      return false;
    });
}

console.log(isBlockWord("BATCH")); // true
console.log(isBlockWord("BUTCH")); // false
console.log(isBlockWord("jest")); // true
