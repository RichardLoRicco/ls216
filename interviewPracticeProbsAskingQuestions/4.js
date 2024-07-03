/*
Problem 4
​Write a function that takes a two-dimensional array as the argument and turns it into a flat array with all duplicated elements removed. Treat numbers and number strings (e.g., 1 and '1') as duplicates, and keep the one that comes first in the result.

---

INPUT: a nested array
RETURN: a flat array with all duplicates removed
RULES:
- treat numbers and number strings as duplicates, and keep the first one
- empty array -> return []
QUESTIONS:
- always 1 arg? Never 0 or more than 1?
- will we always have an array input?
  - if array is not empty, will the array always be nested?
- will all elements be arrays?
- will any array elements be empty arrays?
- sparse arrays or array properties?
- will there be any other subarray elements outside of numbers and strings?
  - any further nested arrays?
- case sensitive when discovering duplicates?
- special numbers?
- 0?
- empty string?
- reasonable number of subarrays?
- string symbols?
- negative numbers?

---

ALGORITHM:
- return [] if arr is empty
- initialize a uniqueFlattenedArr to []
- initialize a seen object to {}
- iterate over each element in arr:
  - if element is an array:
    - iterate over each nestedElement in array:
      - initialize key to a string converted nestedElement
      - if seen doesn't have a key 'key', then:
        - add 'key' to seen with a value of true
        - push nestedElement to uniqueFlattenedArr
- return uniqueFlattenedArr

*/

function flattenAndUnique(arr) {
  if (!arr || arr.length === 0) return [];

  const uniqueFlattenedArr = [];
  const seen = {};
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      element.forEach((nestedElement) => {
        let key = String(nestedElement);
        if (!seen[key]) {
          seen[key] = true;
          uniqueFlattenedArr.push(nestedElement);
        }
      });
    }
  });

  return uniqueFlattenedArr;
}

console.log(flattenAndUnique([])); // []
console.log(
  flattenAndUnique([
    [1, 2, 3],
    ["3", 4, 5, "a"],
  ]),
); // [1, 2, 3, 4, 5, 'a']
