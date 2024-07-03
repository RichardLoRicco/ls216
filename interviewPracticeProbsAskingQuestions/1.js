/*

A distinct string is a string that is present only once in an array.

Given an array of strings, arr, and an integer, k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the result string is the one encountered earliest in the array.

---

INPUT:
- an array of strings (arr)
- an integer (k)
RETURN:
- the kth distinct string in the input array (arr)
- if less than k distinct strings, return ''
RULES:
- result string is the one encountered earliest in arr

QUESTIONS
X- can we be passed an empty array?
  X- yes, return ''
X- will array always have string elements?
  X- what about numbers, objects, etc.?
    X-> if arr has elements, they will be strings
X- can array be sparse?
  X-> no
X- can there be array properties?
  X-> no
X- will string elements always be 1 char long?
  - no
X- will k always be an integer?
  X- no string digits?
  X- NaN?
    X-> no NaN
  X-> yes, always an integer
X- can k be negative?
  X- yes, return ''
X- can k exceed length of arr?
  X-> yes, return ''
X- should the function accept more than 2 parameters?
  X- how should it deal with additional args?
    X-> ignore them
- what should I do if an argument is omitted?
  -> if k is ommited, assume it has a value of 1
- what if k is 0 or -0?
  -> return ''
- what if k is Infinity or -Infinity?
  -> return ''

---

ALGORITHM:
- return '' if k is Infinity, -Infinity, or 0
- initialize strCount to {}
- iterate over every str in arr:
  - if str is in StrCount, increment strCount[str] by 1
  - otherwise, add strCount[str] = 1 to strCount
- initialize uniqueStrs to [];
- iterate over every str in arr:
  - if strCount[str] === 1: 
    - add to uniqueStrs
- return uniqueStrs[k - 1];

*/

function distinctString(arr, k) {
  if (k === Infinity || k === -Infinity || k < 1) {
    return '';
  } else if (arr.length === 0 || arr.length < k) {
    return '';
  }

  const strCount = {};

  arr.forEach(str => {
    if (strCount[str]) {
      strCount[str] += 1;
    } else {
      strCount[str] = 1;
    }
  });

  const uniqueStrs = [];

  arr.forEach(str => {
    if (strCount[str] === 1) uniqueStrs.push(str);
  })

  return uniqueStrs[k - 1];
}

console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
  // first distinct is 'd', then 'a' is second

console.log(distinctString(["d","b","c","b","c","a"], 1)); // "d"

console.log(distinctString([], 2)); // ""

console.log(distinctString(["d","be","c","bi","c","a"], 3)); // "bi"

console.log(distinctString(["d","b","c","b","c","a"], -1)); // ""

console.log(distinctString(["d","b","c","e","f","a"], 7)); // ""

console.log(distinctString(["d","b","c","b","c","a"], 2, 'unnecessary string')); // "a"

console.log(distinctString(["d","b","c","b","c","a"], 0)); // ""

console.log(distinctString(["d","b","c","b","c","a"], -0)); // ""

console.log(distinctString(["d","b","c","b","c","a"], Infinity)); // ""

console.log(distinctString(["d","b","c","b","c","a"], -Infinity)); // ""