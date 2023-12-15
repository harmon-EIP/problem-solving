/*
a	b	result
7	20	1
11	22	1
12	21	2
*/

// 두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.

// 1. 분자, 분모 최대공약수로 약분하여 기약분수로
// let a = 7, b = 20; // 1
// let a = 11, b = 22;
// let a = 12, b = 21;
// let a = 7, b = 7
// let a = 17, b = 1;
// let a = 77, b = 420;
// let a = 1, b = 1;
// let a = 21, b = 30; // 7/10; 1
// let a = 777, b = 10; // 1
let a = 1, b = 30;


function solution(a, b) {
    let answer = 2;
    let gcdValue = gcd(a, b); // 최대공약수
    a = a / gcdValue;
    b = b / gcdValue;
    while (b % 2 === 0) b = b / 2
    while (b % 5 === 0) b = b / 5

    return b === 1 ? 1 : 2;
}

function gcd(a, b) {
    return b > 0 ? gcd(b, a % b) : a;
}

// function factorization(n) {
//     let result = [];
//     let divisor = 2;
//     while (n >= 2) {
//         if (n % divisor === 0) {
//             result.push(divisor)
//             n = n / divisor;
//         }

//         else divisor++;
//     }

//     return [...new Set(result)];
// }
console.log(solution(a, b));