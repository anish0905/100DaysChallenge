// Write a function to determine whether a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and
// capitalization

function palindromeCheck(str)
{
   
let reverse="";
for(let i = str.length-1 ; i>=0 ; i--)
{
    reverse = reverse + str.charAt(i);
}
return reverse

}
let str = "leveL";
str=str.toLowerCase();
let res =palindromeCheck(str);

if(str === res)
{
    console.log(`${res} is pallindrome` );
}
else{
    console.log(`${res} not a Pallindrome`);
}



