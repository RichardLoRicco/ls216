/*
Your local bank has decided to upgrade its ATM machines by incorporating motion sensor technology. The machines now interpret a series of consecutive dance moves in place of a PIN number.

Create a program that converts a customer's PIN number to its dance equivalent. There is one dance move per digit in the PIN number. A list of dance moves is given in the code.

Notes
Each dance move will be selected from a list by index based on the current digit's value plus that digit's index value. If this value is greater than the last index value of the dance list, it should cycle to the beginning of the list.
Valid input will always be a string of four digits. Output will be a string array.
If the input is not four valid numbers, return the string, "Invalid input."

---

INPUT: a string of digits (denoting a customer's PIN)
  - should be 4 digits
RETURN: an array of strings, consisting of the dance moves resulting from the input PIN
RULES:
  - each digit in the PIN corresponds with 1 dance move
  - to determine dance movie:
    - selected by index based on current digit value + digit's index
      -> 280 -> 8's dance move would be at index 8 (value) + 1 (index) = 9
    - if value is greater than last index of dance list, cycle to beginning of list
      -> use % to accomplish this:
        - there are 9 elements (indexes 0 to 8)
  input will always be a string of 4 digits
  - output will always be string array
  - if input isn't 4 valid numbers, return "Invalid input."
NOTES:
  - for each digit in pin:
    - find value
    - lookup value as index in MOVES (using % to ensure wraparound)
    - add returned dance move to results array
    - return results array

  - how to figure out remainder:
    - 9 index is last position
    - value = 9 -> 9
    - value = 10 -> 0

ALGORITHM:
main function:
- initialize pinMoves to []
- return false if not valid pin
- split pin into array of chars, iterate over each char with index:
  - initialize value to -> char converted to number + index
  - add MOVES[value] to pinMoves
- return pinMoves


determine if pin is valid:
- if length of pin is not 4, return false
- split pin into chars and check that every char is a digit
  -> use every and regex
*/

const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

function danceConvert(pin) {
  if (!validPin(pin)) {
    return 'Invalid input.'
  }

  const pinMoves = [];
  pin.split('').forEach((digit, index) => {
    let value = Number(digit) + index;
    pinMoves.push(MOVES[value % 10]);
  });

  return pinMoves
}

function validPin(pin) {
  if (pin.length !== 4) {
    return false;
  }

  return pin.split('').every(char => char.match(/\d/g));
}

console.log(danceConvert("0000")); // ➞ ["Shimmy", "Shake", "Pirouette", "Slide"]
console.log(danceConvert("3856")); // ➞ [ "Slide", "Arabesque", "Pop", "Arabesque" ]
console.log(danceConvert("9999")); // ➞ [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]
console.log(danceConvert("32a1")); // ➞ "Invalid input."

// console.log(validPin('0123'));
// console.log(validPin('0'));
// console.log(validPin('0123334'));
// console.log(validPin('hello'));
// console.log(validPin('2321'));