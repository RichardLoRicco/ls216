/*
Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

Notes
You must mutate the original array.
Keep the relative order of the non-zero elements the same.

---

INPUT
  - an array (potentially containing 0s)
RETURN:
  - the same array, mutated so that all zeros in the array are moved to the end of said array
RULES:
  X- must mutate input array
  X- keep order of non-zero elements the same
  X- make sure mutated array contains same number of zeros -> don't delete any 0s
  X- if no 0s in input array, return input array unmodified
  X- if input array only contains 0s, return input array unmodified
QUESTIONS:
  X- won't always be given numbers as elements in input array
    - all that matters is that an element is not 0 for it to stay in the same order
  X- no sparse arrays
  X- no array properties
  X- return [] if input array is empty
  X- always will have an array as an input

---

ALGORITHM:
- initialize zeroHolder to [];
- initialize iterationsRequired to 1;
- while iterationsRequired > 0:
  - iterate over each element with index in array:
    - if element is 0, remove from array and add to zeroHolder
      - increment iterationsRequired by 1
    - if index is equal to length of array - 1:
      - decrement iterationsRequired by 1
- iterate over each zero in zeroHolder, and:
  - push that element to the end of array
- return array

*/

function zeroesToEnd(array) {
  const zeroHolder = [];
  let iterationsRequired = 1;
  while (iterationsRequired > 0) {
    for (let idx = 0; idx < array.length; idx++) {
      let element = array[idx];
      if (element === 0) {
        zeroHolder.push(array.splice(idx, 1)[0]);
        iterationsRequired++;
      }
    }
    iterationsRequired--;
  }

  zeroHolder.forEach((zero) => array.push(zero));

  return array;
}

// Examples
console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])); //➞ [1, 2, 4, 5, 0, 0, 0]

console.log(zeroesToEnd([0, 0, 2, 0, 5])); //➞ [2, 5, 0, 0, 0]

console.log(zeroesToEnd([4, 4, 5])); //➞ [4, 4, 5]

console.log(zeroesToEnd([0, 0])); //➞ [0, 0]

let arr = [1, 2, 0, 0, 4, 0, 5];
console.log(zeroesToEnd(arr) === arr); //➞ true

console.log(zeroesToEnd([0, 0, "hi there", 2, 0, 5])); //➞ ['hi there', 2, 5, 0, 0, 0]

console.log(zeroesToEnd([])); //➞ []
