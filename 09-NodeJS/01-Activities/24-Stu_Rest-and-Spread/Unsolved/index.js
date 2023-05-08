// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
// spread operator is being used 
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
// the following will be logged 'Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  // the reduce method reduces the output of all the arrays
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
// the number 6 will be displayed
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
// we are using the rest parameter syntax that allows us to represent an indefinite number of arguments
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
// the number 6 will display since it is grabbing the sum of the numbers within ()
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
// it will display the sum of the numbers in the () 110
console.log(additionSpread(1, 2, 3, 4, 100));
