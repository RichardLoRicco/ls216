/*
Create a function that takes an array of students and returns an object representing their notes distribution. Keep in mind that all invalid notes should not be counted in the distribution. Valid notes are: 1, 2, 3, 4, 5

Notes
Try doing that with filter + reduce.

---

INPUT:
  - an array of students
  - each student object contains name and notes properties
RETURN:
  - an object containing the notes distributions
RULES:
  - try to use filter and reduce
  - valid notes are 1, 2, 3, 4, 5
  - invalid notes should not be counted
QUESTIONS:
  - same number of notes for each student?
  - notes will always be an array
    - won't be empty array
  - all note elements are integers
STRATEGY:
  - iterate through each student in object
    - iterate through each note in notes
    - check if note is present
      - if yes increment
      - if no, add
----

ALGORITHM:
  - initialize notesDistribution  to {}
  - iterate over each student, for that student:
    - iterate over each note in student['notes']
      - if note is in notesDistribution, increment value by 1
      - if not, add notesDistrution[note] = 1
  - return notesDistribution
*/

function getNotesDistribution(students) {
  const notesDistribution = {};
  const validNotes = [1, 2, 3, 4, 5];

  students.forEach(student => {

    let validatedNotes = student["notes"].filter(note => {
      return validNotes.includes(note);
    })


    validatedNotes.forEach(note => {
      if (notesDistribution[note]) {
        notesDistribution[note] += 1;
      } else {
        notesDistribution[note] = 1;
      }
    });
  });

  return notesDistribution;
}


console.log(getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
])); /*
➞ {
  5: 3,
  3: 2,
  2: 1
})
*/