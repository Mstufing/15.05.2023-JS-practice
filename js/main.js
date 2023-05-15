
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