//importing string data from frequencies.js file
const frequencies = require('./frequencies');
//convert string in to array
const arr = frequencies.strData.split(/\s/);
//*** Part 1  ***
//getting the answer for this challenge using reduce
const solution1 = arr.reduce((acc, re) => acc + +re ,0);
//logs answer in to the console
console.log(solution1);

//*** Part 2  ***
const fre = [];
let currentFrequency = 0;
let repeated = false;

//Loop while repeated frequency haven't occure
while (repeated === false) {
  arr.forEach(frequens => { 
    currentFrequency += +frequens;
    //If it repeated then log the answer and voilaa! :D
    if (fre.includes(currentFrequency) && repeated === false) {
      console.log('Frequency repeated: ', currentFrequency);
      repeated = true;
    }else {    
      fre.push(currentFrequency);      //Keep adding frequencies
    }
  });
}






