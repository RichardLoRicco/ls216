/*
The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

Counting from the rightmost digit and moving left, double the value of every second digit
For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

We cannot provide code reviews for this problem. Please compare your code with the code in the video.

---

INPUT: a string number
RETURN:
  - true if string number is valid
  - false if string number is invalid
RULES:
  - a number is valid under the Luhn formula if:
    - find check digits -> from rightmost digit to left, double value of every second digit
      - if digit becomes 10 or more, subtract 9 from result
      -> ex) 1111 becomes 2121
      -> ex) 8763 becomes 7733
    - find sum of check digits
      -> 2121 sums to 6
      -> 7733 sums to 20
    - to be valid, checksum must end in 0
      - otherwise, number is not valid
      -> 1111 is not valid bc checksum is 6
      -> 8763 is valid bc checksum is 8
  - ignore all non-numeric chars in input string

----

ALGORITHM:
- find digits -> remove all non string digits from string
- find length of digits
- if digitsLength is even, initialize indexCheck to 0
- else (if digitsLength is odd), initialize indexCheck to 1

- initialize checkDigits to -> split digits into array and map as follows:
  - convert digit to number
  - if index % 2 === indexCheck:
    - digit = digit * 2
    - if digit > 10, reassign digit to digit - 9
- sum each element in checkDigits -> assign to checkSum
- return checksum % 10

*/

function validChecksum(string) {
  let digits = string.replace(/\D/g, '');

  let checkDigits = findCheckDigits(digits)
  
  if (checkDigits.length === 0) return false;

  let checkSum = checkDigits.reduce((sum, digit) => sum + digit);
  return checkSum % 10 === 0;
}

function findCheckDigits(digits) {
  let digitsLength = digits.length;
  let indexCheck = digitsLength % 2 === 0 ? 0 : 1;

  return digits.split('').map((digit, index) => {
    digit = Number(digit);
    if (index % 2 === indexCheck) {
      digit = digit * 2;
      if (digit > 10) {
        digit = digit - 9;
      }
    }
    return digit;
  });
}

console.log(validChecksum('1111')); // false
console.log(validChecksum('8763')); // true
console.log(validChecksum('11aljd11')); // false
console.log(validChecksum('8a7ssd63')); // true
console.log(validChecksum('hello')); // false
console.log(validChecksum('helr43lo')); // false
console.log(validChecksum('helr42lo')); // true
console.log(validChecksum(' ')); // false
console.log(validChecksum('8a7 ;/<Mssd63')); // true
console.log(validChecksum('helr42lo2')); // true
console.log(validChecksum('helr42lo3')); // false