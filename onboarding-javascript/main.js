const myBoolean = true;
const myNumber = 5;
const myString = `Using backticks I can reuse other variables ${myNumber}`;
const myArray = [1, 'cat', false, myString];
const myObject = { key1: 'value1', anotherKey: myArray };
const myFunction = function(myNumberParam) {
  console.log(myNumber + myNumberParam);
};