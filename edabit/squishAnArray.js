/*
Write a function that squishes an array from the left or the right.

Notes
Squishing from the left is to successively sum the first two elements of an array (shortening the array in the process).
Squishing from the right is to successively sum the last two elements of an array.
Include the original array as the first element in either squish.
Return an empty array if the input is an empty array.

---

INPUT:
 1) an array of numbers
 2) a string, either 'left' or 'right'
RETURN:
- a nested array, which consists of the input array squished from the left or the right depending on the string input
RULES:
  - how to squish:
    - from the left: successively sum the first 2 elements of an array, shortening the array
    - from the right: successively sum the last 2 elements of an array, shortening the array
  - include original array as first element in either squish
  - return empty array if input is empty array
QUESTIONS:
X- [] -> []
X- first input will always be array
  X- never sparse, never contain array properties
  X- array could be empty
  X- max size is within reason
X- array elements will always be numbers
  X- can be negative numbers
  X- no special numbers (Infinity, NaN, etc.)
X- second arg will always be a string
  X- will always be 'left' or 'right'
X- always 2 args, never less or more

---

ALGORITHM:
- if arr is [], return []
- if squishType is 'left', return leftSquish
- if squiseType is 'right', return rightSquish

leftSquish:
- initialize squishedArr to []
- add array to squishedArr
- while array length is > 1:
  - slice index 0 and 1, sum them, and add to index 0
  - add array to squishedArr;
- return squishedArr

rightSquish:
- initialize squishedArr to [];
- add array to squishedArr
- while array length is > 1:
  - initialize lastIndex to length of array - 1
  - initialize secondToLastIndex to length of array - 2:
  - slice index secondToLastIndex and lastIndex and add to index secondToLastIndex;
  - add array to squishedArr
- return squishedArr

*/

function squish(arr, squishType) {
  if (!arr || arr.length === 0) return [];

  if (squishType === 'left') {
    return leftSquish(arr);
  } else if (squishType === 'right') {
    return rightSquish(arr);
  } else {
    return "That is not a squish type."
  }
}

function leftSquish(arr) {
  let squishedArr = [];
  squishedArr.push(arr);
  while (arr.length > 1) {
    arr = [...arr]
    let removedElements = arr.splice(0, 2)
    let sum = removedElements.reduce((accum, elem) => accum + elem);
    arr.unshift(sum);
    squishedArr.push(arr);
  }
  return squishedArr;
}

function rightSquish(arr) {
  let squishedArr = [];
  squishedArr.push(arr);
  while (arr.length > 1) {
    arr = [...arr];
    let secondToLastIndex = arr.length - 2;
    let removedElements = arr.splice(secondToLastIndex, 2);
    let sum = removedElements.reduce((accum, elem) => accum + elem);
    arr.push(sum);
    squishedArr.push(arr);
  }
  return squishedArr;
}



console.log(squish([1, 2, 3, 4, 5], "left"))
// ➞ [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]

console.log(squish([1, 2, 3, 4, 5], "right"))
// ➞ [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]

console.log(squish([1, 0, 2, -3], "left"))
// ➞ [[1, 0, 2, -3], [1, 2, -3], [3, -3], [0]]

console.log(squish([1, 0, 2, -3], "right"))
// ➞ [[1, 0, 2, -3], [1, 0, -1], [1, -1], [0]]

console.log(squish([], "left")) 
// []

console.log(squish([], "right")) 
// []