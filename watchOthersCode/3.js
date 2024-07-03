/*
A collection of spelling blocks has two letters per block, as shown in this list:


B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

---

INPUT:
  - a word string
RETURN:
  - true if word can be spelled using the set of blocks
  - false otherwise
RULES:
  - words you can spell are limited to only those that don't use both letters from a given block
  - can only use each block once
NOTES
  - use for loop for iteration so you can exit loop early
QUESTIONS:
  - will words include parens, apostrophes, other symbols?
    - no, just letters
  - will words be case sensitive
    - no
STRATEGY:
  - iterate over every letter in word
    - iterate over every nested block array
    - if block array contains letter, remove block and next
    - if block array doesn't contain letter, return false
  - return true if finish iterating
---
ALGORITHM:
- strip non-letters from word
- iterate over each letter (upcased) in word by index:
  - iterate over every nested block array:
    - if block array contains letter, remove block and continue
    - otherwise (if no block arrays contain letter), return false
- return true if iteration is done

*/


function isBlockWord(word) {
  let strippedWord = word.replace(/[^a-z]/gi, '').toUpperCase();
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

  for (let i = 0; i < strippedWord.length; i++) {

    let found = false;
    for (let blockIdx = 0; blockIdx < blocks.length; blockIdx++) {
      if (blocks[blockIdx].includes(strippedWord[i])) {
        blocks.splice(blockIdx, 1);
        found = true;
        break;
      }
    }
    if (!found) {
      return false;
    }
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('je;/st'));       // true
