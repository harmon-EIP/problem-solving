// arr	queries	result
// [0, 1, 2, 4, 3]	[[0, 4, 1],[0, 3, 2],[0, 3, 3]]	[3, 2, 4, 6, 4]
let arr = [0, 1, 2, 4, 3];
let queries = [[0, 4, 1], [0, 3, 2], [0, 3, 3]];

// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.

function solution(arr, queries) {
    queries.forEach(v => {
        let [s, e, k] = v;
        arr.forEach((item, idx, arr) => {
            if (idx >= s && idx <= e && idx % k === 0)
                arr[idx]++
        })
    })
    return arr;
}

console.log(solution(arr, queries));