// ===== ARRAY ====== //

/* 
  An array is a data structure which stores values based on a 
  sequential index value.

index value =>   0  1  2
                [1, 2, 3]


  - Arrays are most performant when querying a value whose index we know.
  - As well as performing operations on the final entry of the Array
*/

// ===== Object ====== //

/* 
  An  object is a data structure which stores values based off an 
  identifier [key] which must be unique.
   
  EX: {
        key: some-value
      }

*/



// =========== Comparing values in two arrays ============//

const compareArrayValues = (arr1, arr2) => arr1.some((value) => arr2.includes(value));

console.log(
  compareArrayValues(
    ['b', 'c'],
    ['c', 'x',]
  )
);


const compareArrayValuesTwo = (arr1, arr2) => {
  if (!arr1 || !arr2) return 'Inputs must be arrays';
  if (arr1.constructor !== Array || arr2.constructor !== Array) return 'Provide a valid input';

  let obj = {};

  arr1.forEach((item) => !obj[item] ? obj[item] = true : null);

  for (let i = 0; i < arr2.length; i++) {
    let currentVal = arr2[i];

    if (obj[currentVal]) {
      return obj[currentVal];
    }
  }
  return false;
}

console.log(
  compareArrayValuesTwo(
    ['b', 'c', 'l', 'c'],
    ['x', 'x', 'c'],
  )
)

// ======================================================//

// ===== Reverse a string ======= //

function reverseString(string) {
  if (typeof (string) !== 'string' || !string) return 'enter a valid input';

  const strToArray = []

  for (i = string.length; i >= 0; i--) {
    strToArray.push(string[i]);
  }
  return strToArray.join('');
}

const reverseStringOneLine = (string) => [...string].reverse().join('');

console.log(reverseString('hi im ben'));
console.log(reverseStringOneLine('hi im ben'));

// ====== MERGE SORTED ARRAYS ======= //

const mergeSortedArrays = (arr1, arr2) => arr1.concat(arr2).sort((a, b) => a - b);

console.log(
  mergeSortedArrays(
    [0, 3, 4, 31],
    [4, 6, 30]
  )
)


function mergeSortedArraysTwo(arr1, arr2) {
  const mergedArray = [];
  let i = 1;
  let j = 1;

  let currentValOfArrayOne = arr1[0];
  let currentValOfArrayTwo = arr2[0];


  while (currentValOfArrayOne || currentValOfArrayTwo) {

    if (!currentValOfArrayTwo || currentValOfArrayOne < currentValOfArrayTwo) {
      mergedArray.push(currentValOfArrayOne);
      currentValOfArrayOne = arr1[i]
      i++;
    } else {
      mergedArray.push(currentValOfArrayTwo);
      currentValOfArrayTwo = arr2[j]
      j++;
    }
  }

  return mergedArray;
}


console.log(
  mergeSortedArraysTwo(
    [0, 3, 4, 31],
    [4, 6, 30]
  )
)

// ===== find first recursive value in array ===== \\

const myArray1 = [2, 5, 1, 2, 3, 5, 1, 2, 4] // => 2; 
const myArray2 = [2, 1, 1, 2, 3, 5, 1, 2, 4] // => 1;
const myArray3 = [2, 3, 4, 5] // => undefined;


function getFirstReccuringValue(array) {
  let obj = {};
  let i = 0;
  let iteration = array.length;

  while (iteration > 0) {
    const currentVal = array[i];

    if (obj[currentVal]) {
      return currentVal;

    } else {
      obj[currentVal] = currentVal;
      i++;
      iteration--;
    }
  }

  return undefined;
}

console.log(
  '1 =>',
  getFirstReccuringValue(myArray1)
);

console.log(
  '2 =>',
  getFirstReccuringValue(myArray2)
);

console.log(
  '3 =>',
  getFirstReccuringValue(myArray3)
);


// ============= ARRAY CLASS ============= //

class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  insertNewData(value) {
    this.data[this.length] = value;
    this.length++;
    console.log('Adding new entry =>', JSON.stringify(this.data, null, 2))
  }
  removeAtIndex(index) {
    console.log('removing =>', this.data[index])
    delete this.data[index]
    this.length--;
    this.shiftItems(index)
  }
  shiftItems(index) {
    let newData = {};

    for (let key in this.data) {
      if (key > index) {
        newData[key - 1] = this.data[key]  // decrement key by 1: 3 => 2
      } else {
        newData[key] = this.data[key]
      }
    }
    this.data = newData;
    console.log('After shift function =>', JSON.stringify(this.data, null, 2))
  }
}

const newArray = new Array();

newArray.insertNewData('first entry');
newArray.insertNewData('second entry');
newArray.insertNewData('third entry');
newArray.insertNewData('fourth entry');

newArray.removeAtIndex(2);
newArray.removeAtIndex(1);

console.log(newArray)