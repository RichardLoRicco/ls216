/*/*
Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.

Notes
All page numbers in the dictionary will be valid integers.
Return the higher page number if ever two pages are equidistant (see last test case).

---

INPUT:
  1) an object consisting of:
    - chapter name (string); and
    - page number it begins on (number)
  2) a page number
RETURN:
- the name of the chapter that is closets to the input page number
RULES:
- if 2 chapters are equidistant, return chapter with higher page number
- all page numbers in object will be valid integers
QUESTIONS:
- always 2 args
- 1st arg always an object
  - keys always strings denoting chapters
  - values always numbers denoting page numbers
    - no special numbers
- 2nd arg always a number
  - can be negative or 0
  - no special numbers
- if empty object, return "Error: no book entered"

---

ALGORITHM:
- if no keys in book, return "Error: no book entered"
- initialize minDistance to Infinity
- initialize winningChapter to empty string
- iterate over each chapter in book:
  - let currentDistance = absolute value of (book[chapter] - pageNumber)
  - if currentDistance <= minDistance:
    - reassign minDistance to currentDistance
    - reassign winningChapter to book[chapter];
- return winningChapter
 */

function nearestChapter(book, pageNumber) {
  if (Object.keys(book).length === 0) return "Error: no book entered";

  let minDistance = Infinity;
  let winningChapter = "";

  for (let chapter in book) {
    let currentDistance = Math.abs(book[chapter] - pageNumber);
    if (currentDistance <= minDistance) {
      minDistance = currentDistance;
      winningChapter = chapter;
    }
  }

  return winningChapter;
}

console.log(
  nearestChapter(
    {
      "Chapter 1": 1,
      "Chapter 2": 15,
      "Chapter 3": 37,
    },
    10,
  ),
); // ➞ "Chapter 2"

console.log(
  nearestChapter(
    {
      "New Beginnings": 1,
      "Strange Developments": 62,
      "The End?": 194,
      "The True Ending": 460,
    },
    200,
  ),
); // ➞ "The End?"

console.log(
  nearestChapter(
    {
      "Chapter 1a": 1,
      "Chapter 1b": 5,
    },
    3,
  ),
); // ➞ "Chapter 1b"

console.log(nearestChapter({}, 3)); // ➞ "Error: no book entered"
