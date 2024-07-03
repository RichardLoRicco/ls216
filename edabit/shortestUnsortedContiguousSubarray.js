/*
Given an integer array, you need to find the shortest continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

Create a function that returns the length of that subarray.

Notes
The given array can contain duplicates, so ascending order here means <= (see example #3).
If the given array is already sorted or is empty, return 0.

---

INPUT:
- an array of integers
RETURN:
- the length of the subarray that is the shortest subarray for which, when sorted in ascending order, the whole array with be sorted in ascending order too
RULES:
- input array can contain duplicates
- if input array is sorted or empty, return 0

---

ALGORITHM:

- initialize currentResultArrLength to Infinity
- initialize sortedArr to sorted version of arr

return 0 if sortedArr === arr or


find all subarrays
- from startIndex 0 up to length of arr - 1, for each startIndex:
  - from endIndex startIndex + 1 up to length of arr - 1, for each endIndex:
    - initialize sortedSubArr to slice of arr from startIndex to endIndex noninclusive, sorted
    - if slice of arr from 0 to startIndex + sortedSubArr + slice from endIndex up to last index of arr === sortedArr:
      - if length of sortedSubArr is less than currentResultArrLength:
        - reassign currentResultArrLength
return currentResultArrLength

*/

function findUnsortedSubarray(arr) {
  let currentResultArrLength = Infinity;
  let sortedArr = [...arr].sort((a, b) => a - b);

  if (sortedArr.every((elem, idx) => elem === arr[idx])) return 0;
  if (arr.length === 0) return 0;

  for (let startIndex = 0; startIndex < arr.length - 1; startIndex++) {
    for (let endIndex = startIndex + 2; endIndex <= arr.length; endIndex++) {
      let sortedSubArr = arr.slice(startIndex, endIndex).sort((a, b) => a - b);
      let slicedSortedArr = arr
        .slice(0, startIndex)
        .concat(sortedSubArr, arr.slice(endIndex, arr.length));
      // console.log(slicedSortedArr);
      if (slicedSortedArr.every((elem, index) => elem === sortedArr[index])) {
        if (currentResultArrLength > sortedSubArr.length) {
          currentResultArrLength = sortedSubArr.length;
        }
      }
    }
  }

  return currentResultArrLength;
}

console.log(findUnsortedSubarray([1, 3, 2, 5, 8, 7, 13])); // ➞ 5
// You need to sort [3, 2, 5, 8, 7] in ascending order to make
// the whole array sorted in ascending order.

console.log(findUnsortedSubarray([10, 7, 5, 3])); // ➞ 4

console.log(findUnsortedSubarray([2, 4, 4, 4, 4, 3])); // ➞ 5
