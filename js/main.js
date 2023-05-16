
// todo ----- VERY EASY -----

// ? Task #1
// ? Recursion to Repeat a String n Number of Times
// ! Task should solved in Recursion !!!
// todo Try to solve it in another way!

// function repetition(txt, n) {
//     return txt.repeat(n);
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let secondInp = document.querySelector('.inp2');
//     let result = document.querySelector('.result');

//     result.innerHTML = repetition(firstInp.value, secondInp.value);
// }


// ? Task #2
// ? Say Hello to Guests

// function greetPeople(names) {
//     let arr = names.map(elem => `Hello ${elem}`);
//     return arr.join(', ')
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let result = document.querySelector('.result');

//     result.innerHTML = greetPeople(firstInp.value.trim().split(' '));
// }

// ? Task #3
// ? Get the File Extension

// function getExtension(arr) {
//     let myArr = arr.map(elem => elem.split('.')[1])
//     return myArr
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let result = document.querySelector('.result');

//     result.innerHTML = getExtension(firstInp.value.trim().split(' '));
// }

// ? Task #4
// ? Sum of Numbers in an Array

// function arraySum(nums) {
//     let arr = nums.map(elem => elem % 2 === 0 ? elem ** 2 : Math.sqrt(elem))
//     return Number((arr.reduce((accu, curr) => accu + curr, 0)).toFixed(2));
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let myInp = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");
//     let myArr = myInp.value.trim().split(" ");

//     myResult.innerHTML = arraySum(myArr);
// }

// ? Task #5
// ? Extremely Over-Nested
// todo How to get result properly in HTML?!

// function deNest(arr) {
//     return arr.flat(Infinity).pop();
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let myInp = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");
//     let myArr = myInp.value.trim().split(" ");

//     myResult.innerHTML = deNest(myArr);
// }

// ? Task #6
// ? Cowboy Shootout

// function rogerShots(arr) {
//     let bangArr = arr.map(elem => elem === "Bang!" || elem === "BangBang!" ? 0.5 : 0);
//     return bangArr.reduce((accu, curr) => accu + curr, 0)
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let myInp = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");
//     let myArr = myInp.value.trim().split(" ");

//     myResult.innerHTML = rogerShots(myArr);
// }

// ? Task #7
// ? Convert Number to Corresponding Month Name

// function monthName(num) {
//     let arr = {
//         1: "January",
//         2: "February",
//         3: "March",
//         4: "April",
//         5: "May",
//         6: "June",
//         7: "July",
//         8: "August",
//         9: "September",
//         10: "October",
//         11: "November",
//         12: "December"
//     }

//     return arr[num]
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let myInp = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = monthName(myInp.value);
// }

// ? Task #8
// ? CMS Selector Based on a Given String

// function cmsSelector(arr, str) {
//     let myArr = arr.filter(elem => elem.includes(str))
//     return myArr.sort()
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let secondInp = document.querySelector('.inp2');
//     let myRes = document.querySelector('.result');

//     myRes.innerHTML = cmsSelector(firstInp.value.trim().split(' '), secondInp.value);
// }

// ? Task #9
// ? Unlucky 13

// function unlucky13(nums) {
//     let arr = nums.filter(elem => elem % 13 !== 0);
//     return arr;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInp = document.querySelector('.inp');
//     let myRes = document.querySelector('.result');

//     myRes.innerHTML = unlucky13(myInp.value.trim().split(' '));
// }

// ? Task #10
// ? Fix the Error: Filtering out Empty Arrays
// ! How to write empty array in HTML and get the result without empty !!!

// // Fix this incorrect code so that all tests pass!
// function removeEmptyArrays(arr) {
//     return arr.flat()
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInp = document.querySelector('.inp');
//     let myRes = document.querySelector('.result');

//     myRes.innerHTML = removeEmptyArrays(myInp.value.trim().split(' '));
// }

// todo ----- EASY -----

// ? Task #1
// ? Hashes and Pluses

// function hashPlusCount(str) {
//     let hashArr = str.split('').filter(elem => elem === '#');
//     let plusArr = str.split('').filter(elem => elem === '+');
//     return [hashArr.length, plusArr.length];
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let result = document.querySelector('.result');

//     result.innerHTML = hashPlusCount(firstInp.value);
// }

// ? Task #2
// ? Secret Society

// function societyName(friends) {
//     let myArr = friends.map(elem => elem[0]);
//     return myArr.sort().join('')
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let myInp = document.querySelector('.inp');
//     let result = document.querySelector('.result');

//     result.innerHTML = societyName(myInp.value.trim().split(' '));
// }

// ? Task #3
// ? Reverse the Case

// function reverseCase(str) {
//     let arr = str.split('').map(elem => elem == elem.toLowerCase() ? elem.toUpperCase() : elem.toLowerCase())
//     return arr.join('');
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let result = document.querySelector('.result');

//     result.innerHTML = reverseCase(firstInp.value);
// }

// ? Task #4
// ? Repeating Letters

// function doubleChar(str) {
//     let myArr = str.split('').map(elem => elem.repeat(2))
//     return myArr.join('');
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let result = document.querySelector('.result');

//     result.innerHTML = doubleChar(firstInp.value);
// }

// ? Task #5
// ? How Many Vowels?

// function countVowels(str) {
//     let arr = str.match(/[aeiou]/gi);
//     return arr.length;
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let inp = document.querySelector('.inp');
//     let result = document.querySelector('.result');

//     result.innerHTML = countVowels(inp.value);
// }

// ? Task #6
// ? Find the Bomb

// function bomb(str) {
//     let a = /bomb/gi;
//     let b = str.match(a);
//     if (b)
//         return "Duck!!!";
//     return "There is no bomb, relax.";
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let result = document.querySelector('.result');

//     result.innerHTML = bomb(firstInp.value);
// }

// ? Task #7
// ? Return the Index of the First Vowel

// // function firstVowel(str) {
// //     let a = /[aeiou]/gi;
// //     let b = /[AEIOU]/gi;
// //     for (let i = 0; i < str.length; i++)
// //         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
// //             return i;
// //             break;
// //         }
// // }

// function firstVowel(str) {
//     let c = /[aeiou]/gi;
//     return str.search(c);
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let result = document.querySelector('.result');

//     result.innerHTML = firstVowel(firstInp.value);
// }

// ? Task #8
// ? Transforming Words into Binary Strings

// function convertBinary(str) {
//     let a = /[a-m]/gi;
//     let b = /[n-z]/gi;

//     return str.replace(a, 0).replace(b, 1);
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let result = document.querySelector('.result');

//     result.innerHTML = convertBinary(firstInp.value);
// }

// ? Task #9
// ? Most Left Digit

// function leftDigit(num) {
//     let a = /[0123456789]/gi;
//     let arr = num.match(a);
//     let myArr = arr.map(elem => Number(elem));
//     return myArr[0]
// }

// let btn = document.querySelector('.btn');

// btn.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let result = document.querySelector('.result');

//     result.innerHTML = leftDigit(firstInp.value);
// }