// 만약 stk이 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
// stk에 원소가 있고, stk의 마지막 원소가 arr[i]와 같으면 stk의 마지막 원소를 stk에서 제거하고 i에 1을 더합니다.
// stk에 원소가 있는데 stk의 마지막 원소가 arr[i]와 다르면 stk의 맨 마지막에 arr[i]를 추가하고 i에 1을 더합니다.

// arr	result
// [0, 1, 1, 1, 0]	[0, 1, 0]
// [0, 1, 0, 1, 0]	[0, 1, 0, 1, 0]
// [0, 1, 1, 0]	[-1]

let arr = [0, 1, 1, 0]

function solution(arr) {
    let stk = [];

    arr.forEach(v => {
        if (Array.isArray(stk) && !stk.length) {
            stk.push(v);
        } else {
            stk[stk.length - 1] === v ? stk.pop() : stk.push(v);
        }
    })

    return stk.length ? stk : [-1]
}

console.log(solution(arr));

// Done. 2023. 08. 09.