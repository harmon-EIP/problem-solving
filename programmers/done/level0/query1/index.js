// arr	queries	result
// [0, 1, 2, 3, 4][[0, 1], [1, 2], [2, 3]][1, 3, 4, 4, 4]
arr = [0, 1, 2, 3, 4];
queries = [[0, 1], [1, 2], [2, 3]];

function solution(arr, queries) {
    queries.forEach(v => {
        let start = v[0];
        let end = v[1];
        for (start; start <= end; start++) {
            arr[start] += 1;
        }
    })
    return arr;
}

console.log(solution(arr, queries));
