/*

Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s.

---

INPUT:
  - a phone number
RETURN:
  - a cleaned up phone number
RULES:
  - numbers may contain spaces, dash, dot, and parentheses -> all should be ignored
  - how to clean:
    X- number < 10 digits -> BAD
    X- number = 10 digits -> GOOD
    X- number = 11 and first digit is 1 -> remove first digit and GOOD
    X- number > 11 -> BAD
  - if number is bad:
    - return a string of 10 0s
QUESTIONS:
  - are user entered phone numbers strings? YES
  - will any other digits be included in the phone number?
    -> will always be a string, but can contain any string char
    -> remove everything that isn't a digit
  - empty string? return 000000000
  - always have an input
  - input will always be string


ALGORITHM:
- initialize digits to array of string digits in phoneNumber
- if length of digits < 10 or if length > 11, return '0000000000'
- if length of digits = 11:
  - if first element of digits = 1:
    - remove first element of digits
    - return digits joined into a string
  - otherwise, return '0000000000'
- otherwise:
  - return digits joined into a string

*/

function cleanPhoneNumbers(phoneNumber) {
  let digits = phoneNumber.match(/[0-9]/g);

  if (!digits) {
    return '0000000000';
  }

  
  if (digits.length < 10 || digits.length > 11) {
    return '0000000000';
  } else if (digits.length === 11) {
    if (digits[0] === '1') {
      digits.shift();
      return digits.join('');
    } else {
      return '0000000000';
    }
  } else {
    return digits.join('');
  }
}


console.log(cleanPhoneNumbers('203-410-9957')) // 2034109957

console.log(cleanPhoneNumbers('203-41--0-9?>.957')) // 2034109957

console.log(cleanPhoneNumbers('1203-410-9957')) // 2034109957

console.log(cleanPhoneNumbers('2203-410-9957')) // 0000000000

console.log(cleanPhoneNumbers('121203-410-9957')) // 0000000000

console.log(cleanPhoneNumbers('2037')) // 0000000000

console.log(cleanPhoneNumbers('203728736152718362653')) // 0000000000

console.log(cleanPhoneNumbers('')) // 0000000000
