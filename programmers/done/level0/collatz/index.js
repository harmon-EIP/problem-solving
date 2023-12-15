// n	result
// 10	[10, 5, 16, 8, 4, 2, 1]

let n = 10;

function solution(n) {
    let answer = [];
    while (n !== 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n = n * 3 + 1
        }

        answer.push(n);

    }
    answer.push(1);

    return answer;
}

console.log(solution(n));