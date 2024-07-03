/*
Write a function that divides a phrase into word buckets, with each bucket containing n or fewer characters. Only include full words inside each bucket.

Notes

Spaces count as one character.
Trim beginning and end spaces for each word bucket (see final example).
If buckets are too small to hold a single word, return an empty array: []
The final goal isn't to return just the words with a length equal (or lower) to the given n, but to return the entire given phrase bucketized (if possible). So, for the specific case of "by" the only word with a proper length, the phrase can't be bucketized, and the returned array has to be empty.

---

INPUT:
  1) a string of words
  2) n -> a number (integer)
RETURN:
  - an array containing the input string, with each element containing a bucket of words consisting of n or fewer chars
RULES:
  X- spaces are 1 char
  X- if buckets too small to hold full word, return []
  X- trim spaces from beg and end of work bucket


QUESTION:
  X- n will be integer
    X- 0 -> return []
    X- negative -> return []
    X- No NaN
  X- first input will always be a string
    X- empty string -> return []
    X- spaces denote words
    X- no line breaks or other unique reserved chars
  X- ignore any other args if passed into the function
  X- will always have at least 2 args

NOTES:
- keep bucketed phrases in an array of strings
- string elements consist of n or less chars -> but must be full words
- how to determine a bucket:
  - grab n chars -> call it bucketPhrase
  -> check if last char is a space
    - if yes, we are fine
    - if not, check if next char is a space:
      - if yes, we are fine
      - if no, we need to end of the prior word:
        - remove char from bucketPhrase end
          - until we remove a space

ALGORITHM:
- initialize bucketOfPhrases to []
- split phrase into array of words (splitting on spaces);
- initialize subPhrase to ''
- iterate over each word in words:
  - if subPhrase is empty:
    - reassign subPhrase to first word in phrases
    - check length of subPhrase:
      -> if length is less than n,
        - next
      -> if new length is greater than n:
      - remove next word
      - add phrase joined with spaces to bucketOfPhrases
  - if length of subPhrase + ' ' + word is greater than n
    - add subPhrase to bucketOfPhrases
    - reassign subPhrase to word
      - check if
  - otherwise:
    - reassign subPhrase to subPhrase + ' ' + word
    - next

*/

function bucketize(phrase, n) {
  const bucketOfPhrases = [];
  let words = phrase.split(' ');
  let subPhrase = ''

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
  }
  words.forEach(word => {
    if (word.length > n) {
      return [];
    }

    if (subPhrase.length === 0) {
      subPhrase = word;
      if
    }
  })
}



// Examples
console.log(bucketize("she sells sea shells by the sea", 10))
//➞ ["she sells", "sea shells", "by the sea"]

console.log(bucketize("the mouse jumped over the cheese", 7))
//➞ ["the", "mouse", "jumped", "over", "the", "cheese"]

console.log(bucketize("fairy dust coated the air", 20))
//➞ ["fairy dust coated", "the air"]

console.log(bucketize("a b c d e", 2))
//➞ ["a", "b", "c", "d", "e"]

console.log(bucketize("fairy dust coated the air", 2))
//➞ []

console.log(bucketize("a b c d e", 0))
//➞ []

console.log(bucketize("a b c d e", -1))
//➞ []

console.log(bucketize("", 2))
//➞ []

console.log(bucketize("a b c d e", 2, 'third arg'))
//➞ ["a", "b", "c", "d", "e"]
