// Day5>

//*-
//* Programming Question: Sort an Array
//*
5 //? Write a function to sort an array of numbers in an ascending order.
6
// Example usage:
8 // console.log(sortAscending ([5, 3, 1, 8])); // Output: [1, 3, 5, 8]
// 9 console.log(sortAscending ([5, 3, 10, 8])); // Output: [3, 5, 8,10]
// 10 console.log(typeof sortAscending);
11
12 //todo Requirements:
13 //? The function should take an array of numbers as input.
14 //? It should return a new array with the numbers sorted in ascending order.
15 //7 The original array should remain unchanged.
16 //? You are not allowed to use the built-in sort() method.


function sortAscending(arr)
{
// console.log(arr);
let res=arr.sort((a,b)=>a-b);
return res
}

console.log(typeof sortAscending)

console.log(sortAscending ([5, 3, 1, 8]));

function sortAscending2(arr)
{
   
    for(let i =0 ; i<arr.length ; i++)
    {
        // let temp;
        for(let j = i+1 ; j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
              let  temp =arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
             
            }
        }
        
        
    }
    return arr

}

console.log(sortAscending2 ([5, 3, 1, 8]));