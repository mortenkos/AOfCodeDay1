//importing string data from frequencies.js file
const frequencies = require('./frequencies');
//convert string in to array
const arr = frequencies.strData.split(/\s/);
//getting the answer for this challenge using reduce
const solution = arr.reduce((acc, re) => acc + +re ,0);
//logs answer in to the console
console.log(solution);