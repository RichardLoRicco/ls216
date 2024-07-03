/*

Write a function that takes in a string and for each character, returns the distance to the nearest vowel in the string. If the character is a vowel itself, return 0.
---

INPUT:
- a string
RETURN:
- an array of numbers, each of which denotes the distance to the nearest vowel for each char in the input string
- if char is vowel, return 0 for that char
RULES:
- 
QUESTIONS:
X- will always be string input
  - length of string within reason
- no additional args
X- if string is empty, return []
X - case insensitive
X- always alphabetic chars for string input
  - no whitespace
X- always will be at least 1 vowel in input string
X- vowels are aeiou

example/modeling:
`str` => "babcbi"

need to iterate/loop through `str` to check distance from closest vowel
=> 'b'
current `char` is not a vowel
  if index is 0 then we wont look back

  may need a `count` variable here
  will look forward to the next `char` to check if it is a vowel
    => 'a'
    repeat until you get to a vowel
  capture a count of how many chars forward we had to look
    count => 1

  
output  => [1, 0, 1, 2, 1, 0]

---

ALGORITHM:
- initialize distanceTrack to []
- split str into array of chars, for each char and index:
  - initialize minDistance to Infinity;
  - initialize runningDistance to 0;
  - initialize reverseIndex to index
  - while reverseIndex is >= 0:
    - check if str[reverseIndex] is a vowel:
      - if yes, reassign minDistance to runningDistance
        - break out of loop
      - if no, decrement reverseIndex
        - increment runningDistance 
  - reassign runningDistance to 0
  - while index <= size of str - 1:
    - check if str[index] if a vowel:
      - if yes:
        - reassign minDistance to runningDistance if runningDistance < minDistance
        - break out of loop
      - if no, increment index:
        - increment runningDistance
  - add minDistance to distanceTrack;
- return distanceTrack;

*/

function distanceToNearestVowel(str) {
  const distanceTrack = [];

  str.split('').forEach((char, idx) => {
    let minDistance = Infinity;
    let runningDistance = 0;
    let reverseIdx = idx

    while (reverseIdx >= 0) {
      if ('aeiou'.includes(str[reverseIdx])) {
        minDistance = runningDistance;
        break;
      } else {
        reverseIdx -= 1;
        runningDistance += 1;
      }
    }

    runningDistance = 0;

    while (idx <= str.length - 1) {
      if ('aeiou'.includes(str[idx])) {
        if (runningDistance < minDistance) {
          minDistance = runningDistance;
        }
        break;
      } else {
        idx += 1;
        runningDistance += 1;
      }
    }

    distanceTrack.push(minDistance);
  })

  return distanceTrack;
}

console.log(distanceToNearestVowel("")) // []

console.log(distanceToNearestVowel("aaaaa")) // [0, 0, 0, 0, 0]

console.log(distanceToNearestVowel("baBbB")) // [1, 0, 1, 2, 3]

console.log(distanceToNearestVowel("babbb")) // [1, 0, 1, 2, 3]

console.log(distanceToNearestVowel("babbi")) // [1, 0, 1, 1, 0]

console.log(distanceToNearestVowel("babcbi")) // [1, 0, 1, 2, 1, 0]

