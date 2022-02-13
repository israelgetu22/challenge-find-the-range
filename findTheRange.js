// Starting array
let array = [28, 43, -12, 30, 4, 0, -36];

// Write your solution below:

let smallest = array[0];
let largest = array[0];
let range = largest - smallest;

for (let i = 0; i < array.length; i++) {
  if (array[i] < smallest) {
    smallest = array[i];
  }
  if (array[i] > largest) {
    largest = array[i];
  }
  console.log(largest);
  console.log(smallest);
  console.log(range);
}
