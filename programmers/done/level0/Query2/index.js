// 제한사항

// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
// 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.

// 1 ≤ arr의 길이 ≤ 1,000
// 0 ≤ arr의 원소 ≤ 1,000,000
// 1 ≤ queries의 길이 ≤ 1,000
// 0 ≤ s ≤ e < arr의 길이
// 0 ≤ k ≤ 1,000,000
// 입출력 예

let arr = [0, 1, 2, 4, 3]
let queries = [[0, 4, 2], [0, 3, 2], [0, 2, 2]]
let result = [3, 4, -1]

function solution(arr, queries) {
    var answer = [];
    arr.forEach((v, idx) => {
        console.log(v, idx);
        const s = queries[idx][0];
        const e = queries[idx][1];
        const k = queries[idx][2];

        if (v >= s && v <= e) {
            console.log(v);
            return v;
        }
    })
    console.log(answer);
    return answer;
}

solution(arr, queries);