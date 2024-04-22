1 // Challenge: Calculate the Average
2
3 // Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.
4
5 // Your function should:
6
7 // Accept an array of numbers as input.
8 // Calculate the sum of all the numbers in the array.
9 // Divide the sum by the total number of elements in the array to find the average.
10 // Return the calculated average
// console.log(calculateAverage([4,10,2,8]));   //output 6



function calculateAverage(no)
{
    let sum = 0;
    for(let i = 0 ; i<no.length ; i++)
    {
     
        sum =sum+no[i]
    }
    return sum/no.length;

}

console.log(calculateAverage([4,10,2,8]));



// function calculateAverage1(no)
// {
//     no.reduce((acc,curVal)=>{
//                    acc+curVal
//     },0)

// }
// calculateAverage1([4,10,2,8]);


let no =[5,5,5,5];
  const resSum=  no.reduce((acc,curVal)=>{
  let res = acc+curVal
  return res

},0)
console.log(resSum/no.length);