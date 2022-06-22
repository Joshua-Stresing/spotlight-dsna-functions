function map(arr, cb) {
  //create empty array
  let newArray = [];
  //loop through the array
  for (let i = 0; i < arr.length; i++) {
    const newItem = callback(array[i]);
    //append to newArray
    newArray = [...newArray, newItem];
  }
  return newArray;
}

const myArray = [1, 2, 3, 4];
const testMap = (x) => {
  return x * 5;
};

function filter(arr, cb) {
  //create empty arr
  let newArray = [];
  //loop items
  for (let i = 0; i < arr.length; i++) {
    // check for match
    const item = arr[i];
    if (callback(item)) {
      //add to new array
      newArr = [...newArray, item];
    }
  }
  // return it
  return newArray;
}

// filter even number
const testFilter = (x) => {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(filter(myArray, testFilter));
