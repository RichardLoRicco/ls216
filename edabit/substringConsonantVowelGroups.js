/*

Write two functions:

One to retrieve all unique substrings that start and end with a vowel.
One to retrieve all unique substrings that start and end with a consonant.
The resulting array should be sorted in lexicographic ascending order (same order as a dictionary).

Notes
Remember the output array should have unique values.
The word itself counts as a potential substring.
Exclude the empty string when outputting the array.

---

INPUT: a string
RETURN:
  1) an array of all unique substrings that start and end with a vowel
  2) an array of all unique substrings that start and end with a consonant
RULES:
X- returned array for both functions must be sorted in lexicographic ascending order
X- returned array for both functions must have only unique values (no duplicates)
X- input string counts as a substring
X- exclude empty string when returning array -> return []
QUESTIONS:
X- always have a string input
X- if empty string -> []
X- if no vowels or no consonants -> []
X- always 1 arg, never 0 or more than 1
X- always return an array (which is either empty or contains string elements)
X- input string will only contain lowercase alpabetic chars

---

ALGORITHM:
find all substrings
- initialize resultSubstrings to [];
- split string into chars, and for each char and index:
  - from index + 1 up to length of string - 1, for each endIndex:
    - initialize slice of string from index up to endIndex
    - if first and last chars of string are consonants (or vowels), add slice to resultSubstrings if it is not contained there already
- return resultSubstrings sorted;

*/

function getVowelSubstrings(str) {
  const resultSubstrings = [];
  str.split("").forEach((_, idx) => {
    for (let endIdx = idx + 1; endIdx <= str.length; endIdx++) {
      let substr = str.slice(idx, endIdx);
      if (
        substr[0].match(/[aeiou]/) &&
        substr[substr.length - 1].match(/[aeiou]/)
      ) {
        if (!resultSubstrings.includes(substr)) resultSubstrings.push(substr);
      }
    }
  });
  return resultSubstrings.sort();
}

function getConsonantSubstrings(str) {
  const resultSubstrings = [];
  str.split("").forEach((_, idx) => {
    for (let endIdx = idx + 1; endIdx <= str.length; endIdx++) {
      let substr = str.slice(idx, endIdx);
      if (
        substr[0].match(/[^aeiou]/) &&
        substr[substr.length - 1].match(/[^aeiou]/)
      ) {
        if (!resultSubstrings.includes(substr)) resultSubstrings.push(substr);
      }
    }
  });
  return resultSubstrings.sort();
}

console.log(getVowelSubstrings("apple"));
// ➞ ["a", "apple", "e"]

console.log(getVowelSubstrings("hmm")); // ➞ []

console.log(getConsonantSubstrings("aviation"));
// ➞ ["n", "t", "tion", "v", "viat", "viation"]

console.log(getConsonantSubstrings("motor"));
// ➞ ["m", "mot", "motor", "r", "t", "tor"]

console.log(getVowelSubstrings("")); // ➞ []

console.log(getConsonantSubstrings("aei")); // ➞ []
