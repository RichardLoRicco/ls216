/*
Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s.

----

INPUT: 
  - a phone number (a series of digits or special chars)
  - appears to be a string
RETURN:
  - return the input as a cleaned-up phone number
  - if bad number, return string of 10 0s
  - if good number, return the number cleaned up

RULES:
  - special chars should be ignored
    -> remove all non-digits
  - a phone number is good if:
    - it is 10 digits
    - it is 11 digits and the 1st number is a 1
  - a number is bad if:
    - it is less than 10 digits
    - it is more than 11 digits
    - it is 11 digits and first number isn't 1
  - if 1st number is a 1, remove the first number and return the remaining 10 digits


ALGORITHM:
- clean string
  -> remove all non-digits
- find cleaned string length
- if cleaned string length is < 10 or > 11, return '0000000000'
- if cleaned string length is 11:
  - if first digit is 1, return slice from index 1 onwards
  - if first digits isn't 1, return '0000000000'
- if cleaned string length is 10:
  - return cleaned string
*/

function cleanNumbers(phoneNumber) {
  let cleanedNum = phoneNumber.replace(/\D/g, '');
  let cleanedNumLength = cleanedNum.length;
  
  if (cleanedNumLength < 10 || cleanedNumLength > 11) {
    return '000000000';
  } else if (cleanedNumLength === 11) {
    if (cleanedNum[0] === '1') {
      return cleanedNum.slice(1);
    } else {
      return '000000000';
    }
  } else {
    return cleanedNum;
  }
}

console.log(cleanNumbers('2034109957')); // '2034109957'
console.log(cleanNumbers('203-410-9957')); // '2034109957'
console.log(cleanNumbers('12034109957')); // '2034109957'
console.log(cleanNumbers('1-203-410-9957')); // '2034109957'
console.log(cleanNumbers('20341099571')); // '0000000000'
console.log(cleanNumbers('20341099572343232443434')); // '0000000000'
console.log(cleanNumbers('207')); // '0000000000'
console.log(cleanNumbers('2ooo02hel37')); // '0000000000'
console.log(cleanNumbers('hello2034109957')); // '2034109957'
console.log(cleanNumbers('20what3410995do7')); // '2034109957'
console.log(cleanNumbers('hello')); // '0000000000'
console.log(cleanNumbers('2- 41ksjfkj//j0995 7')); // '0000000000'
console.log(cleanNumbers('2- 41ksjfkj//j0995 7')); // '0000000000'