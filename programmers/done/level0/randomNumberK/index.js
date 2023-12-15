// arr	k	result
// [0, 1, 1, 2, 2, 3]	3	[0, 1, 2]
// [0, 1, 1, 1, 1]	4	[0, 1, -1, -1]

// let arr = [0, 1, 1, 2, 2, 3];
// let k = 3;

let arr = [0, 1, 1, 1, 1];
let k = 4;

function solution(arr, k) {
    var answer = [];
    arr.forEach(v => {
        if (!answer.includes(v)) {
            answer.push(v);
        }
    })
    if (answer.length > k) {
        answer = answer.slice(0, k);
    } else {
        let temp = new Array(k - answer.length).fill(-1);
        answer.push(...temp);
    }

    return answer;
}

function solution(arr, k) {
    const set = new Set(arr);
    return set.size < k ? [...set, ...Array(k - set.size).fill(-1)] : [...set].slice(0, k);
}

console.log(solution(arr, k));

// 2023.07.31