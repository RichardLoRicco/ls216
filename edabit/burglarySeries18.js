/*
The police call. They need a more detailed list of the stolen goods.

You are given an array with nested arrays that represent each room in your mansion where the goods were stolen. Each room will have two sub-arrays, one for the stolen items and the other for its values. They always match, the stolen item at index 0 is worth the value at index 0 of the values array, the stolen item at index 1 is worth the value at index 1, and so forth. Look at the example for a clearer picture.

Return an object that represents where the goods were stolen from and which goods were stolen from each room and their value.

---

INPUT:
- an array with nested arrays (represent each room in a mansion where goods were stolen)
  - 1st element is the room
  - 2nd and 3rd elements are subarrays
    - 2nd: array contains strings representing items that were stolen
    - 3rd array contains numbers representing the values of stolen items from 2nd array at that given index
RETURN:
- an object that represents where the goods were stolen from, which goods were stolen, and their value
  - ex) {kitchen: {piano: 100, tv: 50}}

ALGORITHM:
- initialize detailedObject to {}
- iterate over each roomArr:
  - initialize roomName to roomArr[0]
  - add roomName to detailedObject as key with value being {}
  - from index 0 up to length of roomArr[1], for each index:
    - add detailedObject[roomName][roomArr[1][index]] = [roomArr[2][index]]
- return object
*/

function makeDetailedList(roomInfo) {
  const detailedObject = {};

  roomInfo.forEach((roomArr) => {
    let roomName = roomArr[0];
    detailedObject[roomName] = {};
    for (let index = 0; index < roomArr[1].length; index++) {
      let itemName = roomArr[1][index];
      let itemValue = roomArr[2][index];
      detailedObject[roomName][itemName] = itemValue;
    }
  });

  return detailedObject;
}

console.log(makeDetailedList([["kitchen", ["piano", "tv"], [1000, 50]]]));
// ➞ { kitchen: { piano: 1000, tv: 50 } }

console.log(
  makeDetailedList([
    ["basement", ["baseball bat"], [500]],
    ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]],
  ]),
); // ➞ {
//   basement: {
//     "baseball bat": 500
//   },
//   garage: {
//     horses : 110,
//     cadillac: 2000,
//     flowers: 30
//   }
// }
