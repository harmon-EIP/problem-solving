const n = 5;

function solution(n) {
    let arr = Array(n + 1).fill(true).fill(false, 0, 2);

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }

    let answer = arr.filter(e => e).length

    return answer
}

console.log(solution(n));