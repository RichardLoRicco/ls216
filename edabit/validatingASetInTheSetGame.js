/*

In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:

Have the same color or different colors.
Have the same number or different numbers.
Have the same shades or different shades.
Have the same shape or different shapes.
The four properties are:

Colors: red, purple, green
Numbers: 1, 2, 3
Shades: empty, lined, full
Shapes: squiggle, oval, diamond
Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.

Here is an example of a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]
// "Same" properties: color
// "Different" properties: numbers, shading and shapes
The following is not a set:


[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "purple", number: 3, shade: "full", shape: "oval" }
]
// Colors are not all identical, but not all different.


Notes
A set cannot have 2/3 cards having the same property. Either all must share that property, or none will share that particular property.
You can play Set by checking the Resources tab.

---

INPUT: an array of 3 objects
  - each object is a card containing color, number, shade, and shape properties
RETURN:
  - a boolean -> true if the cards constitute a valid set
              -> false if not
RULES:
  - how to determine a valid set of cards:
    - set if valid if, for every property, all cards either have the same or different values
    - if 2 cards have the same value for a property, but the rest are diff, the set is NOT valid
QUESTIONS: 
  - will always have array of 3 objects as arg
  - properties will always be color, number, shade, and shape
  - no empty inputs
NOTES:
  - how do I check each property?:
      - for each key in first card:
        - initialize values array to properties:
        - for each object:
          - add object key's corresponding value to values array
        - if they aren't all equal and they aren't all different:
          reassign set holder variable to false
          - 
- return holder variable

---

ALGORITHM:
- initialize setorNot to true
- iterate over each key in the first element of cards:
  - initialize values to []
  - for each element (card object) in cards:
    - add object key's corresponding value to values array
  - if all elements in values array are equal or all are different:
    - do nothing
  - otherwise:
    - reassign setOrNot to false
- return setOrNot

*/

function isSet(cards) {
  let setOrNot = true;

  Object.keys(cards[0]).forEach(property => {
    let values = [];

    cards.forEach(card => {
      values.push(card[property])
    })

    if (values[0] === values[1] && values[1] === values[2]) {
      
    } else if (values[0] !== values[1] && values[0] !== values[2] && values[1] !== values[2]) {
      
    } else {
      setOrNot = false;
    }
  });

  return setOrNot;
}

console.log(isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
])) // ➞ true

console.log(isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
])) // ➞ true

console.log(isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
])) // ➞ false
// number is 3 for 2 out of 3 cards
