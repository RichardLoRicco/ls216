/*
Take two objects with similar key values and combine them into a new object summing any values that belong to the same category.

There's a married couple, Hank and his spouse Sheila. Hank works at a power plant making $70,000 a year, and Sheila is a teacher making $40,000 a year. They both earn rental income from separate rental properties, Hank will get $12,000 and Sheila $10,000. The new object will show their separate income but combine the rental income because it fits the same category.

const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}

becomes ➞ {
  powerPlant: 70000,
  teaching: 40000,
  rental: 22000   // The rental income is added together.
}
Arguments
user1Income (Object) ⁠— an income object for user1
user2Income (Object) ⁠— an income object for user2
returns: A new object with like values combined
Challenges
They won't have the same number of key-value pairs.
The return object must return the values ordered from lowest to highest so your answers can match the test answers.

---

PROBLEM
  - Given 2 objects that may contain similar key/value pairs, return one object that contains the key value pairs from the input objects, with any similar keys having their values combined (and summed)
INPUT
  - two objects that may contain similar key/value pairs
RETURN
  - one object that combines the two input objects, with any similar key/value pairs combined (and the values summed)
RULES
  - input arguments may not have the same number of key-value pairs
  - return object must return the values ordered from lowest to highest
QUESTIONS
  - will always be 2 object args
  - values will always be numbers
  - will always contain at least 1 similar key/value pair
  - don't need to worry about empty objects or lack of inputs
STRATEGY:
  - iterate over the keys of each object, and add key/value to a new object
    - if key is already in new object, increment value by the current object's value
NOTES:
  - use ...object to copy object's key/value pairs
ALGORITHM:
  - initialize combinedObject to key values from object1
  - iterate over keys of object2:
    - if key is present in combinedObject, add object2's value to combinedObject's value for the key
    - otherwise, add that key/value pair to combinedObject
  - sort the object based on the value's in ascending order



*/

function combineTwoObjects(object1, object2) {
  let combinedObject = {...object1};
  
  Object.keys(object2).forEach(key => {
    if (Object.keys(combinedObject).includes(key)) {
      combinedObject[key] += object2[key];
    } else {
      combinedObject[key] = object2[key];
    }
  })

  return sortObjectByAcendingValues(combinedObject);
}

function sortObjectByAcendingValues(object){
 return Object.fromEntries(Object.entries(object).sort((a, b) => a[1] - b[1]));
}


const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}

console.log(combineTwoObjects(user1, user2));
// returns:
// {
//   powerPlant: 70000,
//   teaching: 40000,
//   rental: 22000   // The rental income is added together.
// } 