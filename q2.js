
Day2> hashtag_generator.js
//
//* Programming Question: Hash Tag Generator
//x
//? You are required to implement a function generatelash that generates a hash tag from a given input string. The hash tag should be constructed as follows:
// ? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//7 Otherwise, the function should return the generated hash tag prefixed with #.
10
11
// Write a function generateHash to accomplish this task.
12
// 13 console.log(generateHash("my name is anish kumar"));
14
// o/p #MyName Is Thapa Technical"



function generateHash(str) {
    if (str.length > 288 || str.trim() === 0) {
        return false;
    }
              let newArr =  str.split(" ");
           newArr  = newArr.map((newArr)=>{
             return   newArr.replace(newArr[0],newArr[0].toUpperCase());
            
            }  
        )
        console.log(newArr);
              
  
}
console.log(generateHash("my name is anish kumar"));
