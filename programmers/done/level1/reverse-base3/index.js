// n	result
// 45	7
// 125	229
// let n = 45;
let n = 125;

function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

console.log(solution(n));

// done 2023. 10. 25.

// success code 1 
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}
/* split 대신 구조분해할당 */