/*

Given an array of integers, nums, return the third largest number in the array. If the third largest number does not exist, return the greatest number.

You are not allowed to sort the array.

---

INPUT:
- an array of integers (nums)
RETURN:
- the third largest number in the input array
- if no third largest number, return greatest number
RULES:
X- can't sort array
QUESTIONS:
X- will always have array input? YES
X- will always have 1 input?
  X- default value? NO
  X- need to account for additional args? NO, IGNORE
X- if input array is [], return undefined
X- if not empty, will input array always contain numbers? YES
  X- no strings, objects, etc.
X- will input array contain negatives? YES
X- will input array contain special numbers such as -Infinity, Infinity, NaN, etc -> NO
X- if 1 number in input array, return that number
X- no sparse array or array properties
X- 0 can be included in input array
- can I sort a copy of the array?
X- could there be duplicate numbers in input array? YES
  X- if so, how do I treat duplicates? TREAT THEM AS SEPARATE, SO INCLUDE IN COUNT
X- any size limitations? WITHIN REASON

*/



// Example
console.log(thirdMax([3, 2, 1])); // 1

console.log(thirdMax([3, 2, 1], [1, 2, 3, 4])); // 1

console.log(thirdMax([])); // undefined

console.log(thirdMax([3, 2, 1, 3])); // 2

console.log(thirdMax([3, 2, 1, 5, 4, 9, 8, 12,])); // 8

console.log(thirdMax([-3, -2, -1])); // -3

console.log(thirdMax([3, -4, 2, -12, 0])); // 0

console.log(thirdMax([3])); // 3