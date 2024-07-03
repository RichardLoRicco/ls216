/*

You are given two inputs:

An array of abbreviations.
An array of words.
Write a function that returns true if each abbreviation uniquely identifies a word, and false otherwise.


Notes:
Abbreviations will be a substring from [0, n] from the original string.

---

INPUT:
  - array of abbreviations
  - array of words
RETURN:
  - true if each abbrev uniquely ids a word, false otherwise
RULES:
- abbrev uniquely ids a word if only one word starts with that abbrev
- abbrevs consist of the beging of the original words
  -> i.e., an abbrev ids a word if that word starts with the abbrev
NOTES:
STRATEGY:
  - check that for every abbreviation:
    - the count of words that begin with that abbreviation is 
ALGORITHM:
- for every abbreviation:
  - initialize wordCount to 0
  - initialize lengthOfSlice to abbrev length
  - iterate through each word:
    - if slice of word of length length is equal to abbrev, increment wordCount by 1
  - check that wordCount is equal to 1
-> this should return true if for every abbrev, the count of words that are IDd by that abbrev is 1

*/

function uniqueAbbrev(abbreviations, words) {
  return abbreviations.every(abbrev => {
    let wordCount = 0;
    let lengthOfSlice = abbrev.length;
    words.forEach(word => {
      if (word.slice(0, lengthOfSlice) === abbrev) {
        wordCount += 1;
      }
    });

    return wordCount === 1;
  })
}


console.log(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"])) // ➞ false
// "ho" and "h" are ambiguous and can identify either "house" or "hope"
console.log(uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"])) // ➞ true
console.log(uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"])) // ➞ false
console.log(uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"])) // ➞ true