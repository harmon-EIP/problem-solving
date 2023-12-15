// common	result
// [1, 2, 3, 4]	5
// [2, 4, 8]	16

// let common = [1, 2, 3, 4];
let common = [2, 4, 8];
let result = 5;

function solution(common) {
    var answer = 0;
    let N = common.length;
    // 등차
    let t1 = common[N - 1] - common[N - 2];
    let t2 = common[N - 2] - common[N - 3];
    if (t1 === t2) {
        answer = common[N - 1] + t1;
    }

    // 등비
    let m1 = common[N - 1] / common[N - 2];
    let m2 = common[N - 2] / common[N - 3];
    if (m1 === m2) {
        answer = common[N - 1] * m1;
    }

    return answer;
}

console.log(solution(common));

// 2023.07.26 Done.