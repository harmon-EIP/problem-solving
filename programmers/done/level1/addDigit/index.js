// N	answer
// 123	6
// 987	24

let n = 100000000;
let answer = 6;

// function solution(n) {
//     return n.toString().split('').reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
// }

// console.log(solution(n));

// function solution(n){
//     // 쉬운방법
//     return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
// }

function testFunction() {
    let String1 = '3'
    let String2 = '4'
    let Number1 = 1
    let Number2 = 2

    let result = String1 - 0;
    let result2 = Number1 + String1;

    console.log(typeof result, result)
    console.log(typeof result2, result2)
};

console.log(testFunction());