// arr	queries	result
// [0, 1, 2, 4, 3]	[[0, 4, 2],[0, 3, 2],[0, 2, 2]]	[3, 4, -1]
let arr = [0, 1, 2, 4, 3];
let queries = [[0, 4, 2], [0, 3, 2], [0, 2, 2]]; // s, e, k
let result = [3, 4, -1];

function solution(arr, queries) {
    var answer = [];

    queries.forEach(v => {
        let [s, e, k] = v
        const resultArr = arr.slice(s, e + 1).sort((a, b) => a - b);
        let cnt = 0;
        resultArr.forEach(value => {
            if (value > k && cnt === 0) {
                answer.push(value);
                cnt++;
            }
        })
        if (cnt === 0) answer.push(-1);
    })
    return answer;
}

function solution(arr, queries) {
    return queries.map(([s, e, k]) => arr.slice(s, e + 1).filter((n) => n > k).sort((a, b) => a - b)[0] || -1);
}

// done 2023 08 16