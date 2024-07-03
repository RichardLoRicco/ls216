/*

Given an array of strings and an original string, write a function to output an array of boolean values - true if the word can be formed from the original word by swapping two letters only once and false otherwise.

Notes
Original string will consist of unique characters.

---

INPUT
  1) an array of strings
  2) an original string
OUTPUT
- an array of booleans
  -> true if word can be formed from original word by swapping 2 letters only
  -> false otherwise
RULES
- original string only consists of unique chars:
- can include string digits
- swap must occur between 2 chars to be valid
  - can't just move 1 char
  - can't swap more than 2 chars
QUESTIONS:
X- true if both strings are the same (i.e., no swap required)? no
X- first input always an array
  X- elements always strings
  X- elements can contain any string chars -> treat each the same
    X- can be a mix of diff chars too
X- no sparse array or array properties
X- always 2 args (never 0 or more than 2)
X- second argument is always a string
  X- if '', return false for everything
X- return value is always an array of booleans (or empty)
X- if first input [], return []

---

ALGORITHM:
- transform each word:
  - initialize differenceCount to 0
  - initialize differingIndexes to []
  - split each word into letters with index:
    - if word[index] is not equal to originalString[index]:
      - increment differenceCouunt by 1 and add index to differingIndexes
  - if differenceCount is 2 and word[differingIndexes[0]] is equal to originalString[differingIndexes[1]] and word[differingIndexes[1]] is equal to originalString[differingIndexes[0]]:
    - return true
  - otherwise return false;

*/

function validateSwaps(words, originalString) {
  if (!words || words.length === 0) return [];

  return words.map(word => {
    let differenceCount = 0;
    let differingIndexes = [];

    word.split('').forEach((char, index) => {
      if (word[index] !== originalString[index]) {
        differenceCount++;
        differingIndexes.push(index);
      }
    });

    if (differenceCount === 2) {
      if (word[differingIndexes[0]] === originalString[differingIndexes[1]]) {
        if (word[differingIndexes[1]] === originalString[differingIndexes[0]]) {
          return true;
        }
      }
    }

    return false
  })
}


console.log(validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE"))
// ➞ [true, true, false, false]

console.log(validateSwaps(["32145", "12354", "15342", "12543"], "12345"))
// ➞ [true, true, true, true]

console.log(validateSwaps(["9786", "9788", "97865", "7689"], "9768"))
// ➞ [true, false, false, false]

console.log(validateSwaps(["BACD3E", "EBCD3A", "BCDEA", "ACBED"], "ABCD3E"))
// ➞ [true, true, false, false]


console.log(validateSwaps(["a<b", "ab<"], "<ab"))
// ➞ [true, false]


console.log(validateSwaps([], "ABCDE"))
// ➞ []


console.log(validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE"))
// ➞ [true, true, false, false]


console.log(validateSwaps(["BACDE", " ", "", "BCDEA", "ACBED"], ""))
// ➞ [false, false, false, false false]