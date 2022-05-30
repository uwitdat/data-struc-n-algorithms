// ======= SORTING ======= //

/*
    - Valuable when dealing with large/ larger data sets.

    - There are many different sorting algorithms, such as:

      Comparison  Sort:
        - Bubble Sort
        - Insertion Sort
        - Selection Sort
        - Merge Sort
        - Quick Sort

      Non-Comparison Sort:
        - Counting sort
        - Radix sort

    .sort() sorts by converting values to strings and sorting by their UNICODE values.
    the time and space complexity can never be guranteed.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    https://www.toptal.com/developers/sorting-algorithms
*/

const arrayToSort = [6, 5, 3, 1, 8, 7, 2, 4]
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]


function bubbleSort(array) {

  let i = 0;
  let startVal = array[i];
  let comparingVal = array[i + 1];
  let iterations = array.length;

  while (iterations > 0) {

    if (comparingVal === undefined) {
      i = 0;
      startVal = array[i]
      comparingVal = array[i + 1]
      iterations--;

    } else if (startVal > comparingVal) {
      array[i] = comparingVal;
      array[i + 1] = startVal;
      startVal = array[i + 1];
      comparingVal = array[i + 2];
      i++;
    } else {
      startVal = array[i + 1];
      comparingVal = array[i + 2];
      i++;
    }
  }
  return array;
}

/*  
  if (comparingVal === undefined) {
        i = 0;
        startVal = array[i]
        comparingVal = array[i + 1]
        iterations--;
      }

   restart the process with the sorted array values
   if there is no comparison value.
   no comparison value signifies that the startingValue 
   has been compared to every other value in the array.

*/


function bubbleSortTwo(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        //swap
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log('bubble 1 =>', bubbleSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
console.log('bubble 2 =>', bubbleSortTwo([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));


function selectionSort(array) {
  let smallest = null;
  let prevSmallestIndex = null;


  for (let i = 0; i < array.length - 1; i++) {
    smallest = array[i];
    prevSmallestIndex = 0;

    for (let j = i + 1; j <= array.length - 1; j++) {
      if (smallest > array[j]) {
        smallest = array[j];
        prevSmallestIndex = j;
      }
    }

    array[prevSmallestIndex] = array[i];
    array[i] = smallest;
  }


  return array;
}

selectionSort(numbers);


console.log(
  'selection 1 =>',
  selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0])
)


const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let j = i + 1;
    while (array[j] < array[j - 1]) {
      const temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j--;
    }
  }
  return array;
};


console.log('after insertion =>',
  insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0])
);


function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  //split array into right and left

  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat
    (right.slice(rightIndex));
}

console.log(
  'merge sort =>',
  mergeSort(
    [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
  )
)