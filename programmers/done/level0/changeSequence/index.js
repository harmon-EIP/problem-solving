// arr	result
// [1, 2, 3, 100, 99, 98]	5
let arr = [1, 2, 3, 100, 99, 98];
// let arr = [0]

// 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.

// 런타임 에러
function solution(arr) {
    var answer = 0;
    let count = 0;
    let checkArr = new Array(arr.length).fill(0);
    let sum = 0;
    while (sum !== arr.length) {
        arr.forEach((v, idx) => {
            if (v >= 50 && v % 2 === 0) {
                arr[idx] = v / 2;
            } else if (v < 50 && v % 2 !== 0) {
                arr[idx] = v * 2 + 1
            } else {
                checkArr[idx] = 1;
            }
        })
        sum = checkArr.reduce((acc, cur) => acc + cur, 0);
        count++;
    }
    answer = count - 1
    return answer;
}

console.log(solution(arr));


