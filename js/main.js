
// todo ----- VERY EASY -----

// ? Task #1
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

// ? Task #2
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

// ? Task #3
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

// ? Task #4
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