

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