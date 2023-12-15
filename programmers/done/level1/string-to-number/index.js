// s	result
// "one4seveneight"	1478
// "23four5six7"	234567
// "2three45sixseven"	234567
// "123"	123
// let s = "one4seveneight";
// let s = "23four5six7";
// let s = "2three45sixseven";
// let s = "123";
// 10203 → "1zerotwozero3"
let s = "1zerotwozero3";

function solution(s) {
    let numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    numArr.forEach((e, idx) => s = s.replaceAll(e, idx));

    return Number(s);
}

console.log(solution(s));

// done 2023. 11. 01

// function solution(s) {
//     let charSet = {
//         "zero" : 0,
//         "one" : 1,
//         "two" : 2,
//         "three" : 3,
//         "four" : 4,
//         "five" : 5,
//         "six" : 6,
//         "seven" : 7,
//         "eight" : 8,
//         "nine" : 9,
//     }

//     for(let [key, value] of Object.entries(charSet)) {
//         let re = new RegExp(`${key}`,"g");
//         s = s.replace(re, value);
//     }
//     return parseInt(s);
// }