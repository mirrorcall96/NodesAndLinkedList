/*
-Create a function that takes a number as an argument. 
-Adds up all the numbers from 1 to the number you passed to the function. 
-For example, if the input is 6, your function should return 21 because 1 + 2 + 3 + 4 + 5 + 6 = 21.
*/
const addUp = (num) => {
    let sum=0;
    for (let i = 1; i <= num; i++) {sum +=i;}
    return sum;
};

//Test your solution
console.log(addUp(6)); //Should return 21
console.log(addUp(13)); //Should return 91
console.log(addUp(58)); //Should return 1711
console.log(addUp(620)); //Should return 192510
/* 
Write a function that always returns 5
*** YOU CANNOT USE ANY OF THE FOLLOWING CHARACTERS: 0123456789*+-/ ***
*/

const returnFive = () => {
    let myString = "AAAAA"
    return myString.length;
};

//Test your solution

console.log(returnFive()); // Should return 5