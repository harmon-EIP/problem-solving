// arr	result
// [1, 2, 1, 4, 5, 2, 9]	[2, 1, 4, 5, 2]
// [1, 2, 1]	[2]
// [1, 1, 1]	[-1]
// [1, 2, 1, 2, 1, 10, 2, 1]	[2, 1, 2, 1, 10, 2]
let arr = [1, 2, 1, 2, 1, 10, 2, 1];

function solution(arr) {
    var answer = [];
    let stId = arr.indexOf(2);
    let laId = arr.lastIndexOf(2);
    answer = arr.slice(stId, laId + 1);
    return answer.length ? answer : [-1];
}

console.log(solution(arr));