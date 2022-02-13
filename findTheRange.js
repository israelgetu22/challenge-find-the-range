// Starting array
let array = [28, 43, -12, 30, 4, 0, -36];

// Write your solution below:

let smallest = array[0];
let largest = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] < smallest) {
    smallest = array[i];
  } else if (array[i] > largest) {
    largest = array[i];
  }
}
console.log("The largest number is " + largest);
console.log("The smalest number is " + smallest);
let range = largest - smallest;
console.log(`The range of this array is ${range}`);
