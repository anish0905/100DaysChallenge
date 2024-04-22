
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

<<<<<<< HEAD
1 // Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.



function findMax(num) {

    // console.log(...num)
    let res = Math.max(...num)
    return res

}
// console.log(findMax([2,9,1,3,5]));

//2nd rules

function findMax2(num) {
    for (let i = 0; i < num.length; i++) {
        // console.log(num[i]);

        for (let j = i; j < num.length; j++) {

            if (num[j] < num[j + 1]) {
                let temp = num[j];
                num[j] = num[j + 1];

                num[j + 1] = temp;

            }
        }

    }
    return num[0];


}
let arr = [2, 9, 1, 3, 5];
console.log(findMax2(arr));
=======
>>>>>>> 1ec830ff16b94ddcfbbaf267892b2c15dc484511
