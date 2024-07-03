/*
Create a function that takes an unsorted list of numbers and returns the number of unique triplets whose sum is equal to the variable n.

Notes
You should also expect lists with less than three elements.

---

INPUT:
  1) an unsorted array of numbers
  2) a number, n, denoting a desired sum
RETURN:
- the number of unique triplets in the input array that sum to n
RULES:
- can receive arrays with less than 3 elements -> return 0
QUESTIONS
- [] -> 0
- always 2 args
- 1st arg always array of numbers (or empty)
  - numbers can be positive or negative or 0
  - no special numbers
  - no sparse array or array properties
- 2nd arg always a number
  - can be positive, negative, or 0
  - no special numbers
- what is a unique triplet?

---

ALGORITHM:
- let countOfTriplets = 0
- return countOfTriplets if size of array is less than 3
find all unique elements:
  - initialize uniqueElements to []
  - iterate over each elementin array:
    - if not included in uniqueElements, add to uniqueElements
find all potential sums
- iterate over each firstIndex from 0 to length of array - 3
  - iterate over each secondIndex from firstIndex + 1 up to length of uniqueElements - 2;
    - iterate over each thirdIndex from secondIndex + 1 up to length of uniqueElements - 1;
      - if sum of all three elements is n, increment countOfTriplets by 1
*/

function tripletSum(array, n) {
  let countOfTriplets = 0;
  if (array.length < 3) return countOfTriplets;

  let uniqueElements = [];
  for (let elem of array) {
    if (!uniqueElements.includes(elem)) uniqueElements.push(elem);
  }

  for (
    let firstIndex = 0;
    firstIndex < uniqueElements.length - 2;
    firstIndex++
  ) {
    for (
      let secondIndex = firstIndex + 1;
      secondIndex < uniqueElements.length - 1;
      secondIndex++
    ) {
      for (
        let thirdIndex = secondIndex + 1;
        thirdIndex < uniqueElements.length;
        thirdIndex++
      ) {
        let firstNum = uniqueElements[firstIndex];
        let secondNum = uniqueElements[secondIndex];
        let thirdNum = uniqueElements[thirdIndex];

        if (firstNum + secondNum + thirdNum === n) {
          countOfTriplets++;
        }
      }
    }
  }

  return countOfTriplets;
}

console.log(tripletSum([1, 0, 2, 6, 3, 9, 3], 11)); // ➞ 2
// Since we found two unique triplets that equate to 11: 0+2+9 and 2+6+3

console.log(tripletSum([1, 2, 6, 3, 4, 5, 9, 10, 11], 20)); // ➞ 5

console.log(tripletSum([5, 2, 8], 2)); // ➞ 0

console.log(tripletSum([5, 2], 7)); // -> 0 (because we don't have 2)

console.log(tripletSum([], 2)); // ➞ 0

console.log(tripletSum([-1, -2, 3], 0)); // ➞ 1

console.log(tripletSum([-1, 0, -2, 4], -3)); // ➞ 1
