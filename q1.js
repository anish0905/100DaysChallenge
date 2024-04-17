// Day1>

// Programming Question: Longest word in a String
//
//? Q: write a function findlongestword that takes a string as input and suttiple longest words, return the first encountered. turns longest word in the string. If there
// Constraints.
//7 The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is noоп-карту.
//? The input string way contain aultiple words separaten spaces.
//* Note:
// expty false. ? If the input string contains only whitespace, the function should return
// // The function should ignore leading and trailing whitespace when determining the longest word.
// console.log(findLongest Word ("Watch anish  javascript course anywhere"))



function findLongestWord(str) {
    if (str.trim() === 0) {
        return false;
    }
    let strArr = str.split(" ");

    let res = strArr.sort((a, b) => b.length - a.length);

    console.log(res[0]);


}
findLongestWord("Watch anish  javascript course anywhere")

