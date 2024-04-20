
1 // Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

//Example  usage:

// console.log(findMax([1,5,3,9,2]));  //output 9

// console.log(findMax([-10,-5,-3,-9,-2]));  //output -2

// console.log(findMax([5]));  // output:5;


const findMax =(arr)=>{
    console.log(...arr);
    return Math.max(...arr);
}
console.log(findMax([5]));

// console.log(findMax([1,5,3,9,2])); 
// console.log(findMax([-10,-5,-3,-9,-2])); 

