// arr	divisor	return
// [5, 9, 7, 10]	5	[5, 10]
// [2, 36, 1, 3]	1	[1, 2, 3, 36]
// [3,2,6]	10	[-1]

// let arr = [2, 36, 1, 3];
let arr = [3, 2, 6];
// let divisor = 1;
let divisor = 10;

function solution(arr, divisor) {
    var answer = [];

    arr.forEach(v => {
        if (v % divisor === 0) {
            answer.push(v);
        }
    })
    answer.sort((a, b) => a - b);

    return !!answer.length ? answer : [-1];
}

console.log(solution(arr, divisor));

// Done 20231010 

/*

function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}

*/