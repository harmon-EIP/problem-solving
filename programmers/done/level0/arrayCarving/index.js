// query의 값	query 처리 전	query 처리 후	비고
// 4	[0, 1, 2, 3, 4, 5]	[0, 1, 2, 3, 4]	0번 인덱스의 쿼리이므로 뒷부분을 자른다.
// 1	[0, 1, 2, 3, 4]	[1, 2, 3, 4]	1번 인덱스의 쿼리이므로 앞부분을 자른다.
// 2	[1, 2, 3, 4]	[1, 2, 3]	2번 인덱스의 쿼리이므로 뒷부분을 자른다.
// 따라서 [1, 2, 3]을 return 합니다.

// arr	query	result
// [0, 1, 2, 3, 4, 5]	[4, 1, 2]	[1, 2, 3]
let arr = [0, 1, 2, 3, 4, 5];
let query = [4, 1, 2];
// let query = [1, 1, 2];

function solution(arr, query) {
    var answer = [];

    query.forEach((v, idx) => {
        if (idx % 2 === 0) { // 짝수
            arr = arr.slice(0, v + 1);
        }

        if (idx % 2 === 1) { // 홀수 
            arr = arr.slice(v, arr.length);
        }
    })

    answer = arr;

    return answer;
}

console.log(solution(arr, query));

// 20230915 1749 Done

function solution(arr, query) {
    let s = 0;
    let e = query.length - 1;
    for (let i=0; i<query.length; i++) {
        if (i%2==0) e = s + query[i];
        else s += query[i];
    }
    const answer = arr.slice(s, e);
    return answer.length ? answer : [-1];
}

