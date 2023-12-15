// a	b	n	result
// 2	1	20	19
// 3	1	20	9
// let a = 2;
// let b = 1;
// let n = 20;
// let result = 19;
let a = 3;
let b = 1;
let n = 20;
let result = 9;


function solution(a, b, n) {
    var answer = 0;
    let changeCoke = 2

    while (changeCoke >= 1) {
        changeCoke = Math.floor(n / a) * b;
        n = changeCoke + n % a
        answer += changeCoke;
    }

    return answer;
}

console.log(solution(a, b, n));

// done 2023. 11. 17