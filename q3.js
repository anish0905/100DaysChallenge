// Day3>


// Interview Question: Count Occurrences of Character
3 //*
5 //! Task:
6 //? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.
// 8 console.log(countChar("Mississippi", "I")); // Output: 4
10 //todo Constraints:
11 //? The function should be case-sensitive.
12 //? The function should handle both lowercase and uppercase characters.
13 //7 The character parameter can be any printable ASCII character (the function sho
14
// accept any character that is part of the ASCII character set and is printable).



function countChar(word ,char)
{

word=word.toLowerCase();
char = char.toLowerCase();

  const totalCount   = word.split("")
  .reduce((accum , cunChar)=>{
 if(cunChar===char)
 {
    accum++
 }
 return accum

  },0)
  return totalCount


}



console.log(countChar("MissIssippi","I"));