1 // Challenge: Factorial Finder
//integer num as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!,
//  is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.
5 // Here are some examples of factorial calculations:
7 // factorial(0) => 1
8 // factorial(1) => 1
9 // factorial(2) => 2
10 // factorial(3) => 6
11 // factorial(4) => 24
12 // factorial(5) => 120
13 // Your function should work for any non-negative integer input.

const factorial4=(num)=>{
    let fact = 1 ;
    for(let i = 1; i<=num ; i++)
    {
        console.log(i);
        fact =fact*i;
    }
    return fact


}
console.log(factorial4(11));



function factorial(no)
{
if(no<=1)
{
    return 1;
}
return no*factorial(no-1);



}
console.log(factorial(4));

function factorial1(no)
{
    if(no==0 || no ==1)
    {
        return 1;

    }
    return no*factorial(no-1);
}
console.log(factorial1(5));



function factorial2(no)
{
    if(no<=1)
    {
        return 1
    }
    return no*factorial(no-1)

}
console.log(factorial2(3));