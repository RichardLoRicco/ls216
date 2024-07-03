/*

Write a function, primeNumberPrinter, that prints all prime numbers present as substrings in a given string.

---

INPUT:
- a string
RETURN:
- an array containing all prime numbers present at substrings in input string
- empty array if no prime numbers present
RULES:
X- prime number is a number greater than 1 that is only dibisible 1 and itself
QUESTIONS:
X- will I always have a string input? YES
  X- no arr, object, number YES
X- empty string input ('') -> []
X- do I need to account for more or less than 1 arg? NO
X- will string always contain digits? NO, return empty array then
X- do I treat more than 1 consecutive string digits as 1 whole number? 
  X- Ex) '23' as 23 or rather as 2 and 3
  X- YES, TREAT AS 1
X- will input string only contain letters and digits?
  - NO, will contain symbols and whitespace etc. but treat all non-digit chars the same
X- if no prime numbers in input, return []
X- length of input string will be within reason
X- if we have a negative preceding a digit, include that so that the number is negative

---

ALGORITHM:
- find all negative and positive string numbers in string, assign returned array of string numbers to allStringNums
- initialize primeNums to []
- iterate through each stringNum in allStringNums, and for each stringNum:
  - let num = stringNum converted to a number
  - if num is a prime number, add num to primeNums
- return primeNums

how to find a prime number
- if number is 2, return true
- otherwise:
  - for every n from 2 up to num - 1:
    - num is not divisble by n

*/

function primeNumberPrinter(string) {
  const allStringNums = string.match(/-*\d+/g);
  const primeNums = [];

  if (!allStringNums) return [];
  
  allStringNums.forEach(stringNum => {
    let num = Number(stringNum);
    if (isPrime(num)) primeNums.push(num);
  })

  return primeNums;
}

function isPrime(num) {
  if (num === 2) return true;

  for (let n = 2; n < num; n++) {
    if (num % n === 0) return false;
  }

  return true;
}


// Example
console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13]

console.log(primeNumberPrinter("")); // []

console.log(primeNumberPrinter("abckd")); // []

console.log(primeNumberPrinter("s6fhg19dsk22h61 .<dsmk17")); // [19, 61, 17]

console.log(primeNumberPrinter("a14bc20k8d")); // []

console.log(primeNumberPrinter("a4bc2k-13d")); // [2, -13]

console.log(primeNumberPrinter("a4bc2k13-d")); // [2, 13]

