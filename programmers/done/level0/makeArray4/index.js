// [1, 4, 2, 5, 3]	[1, 2, 3]

// let arr = [1, 4, 2, 5, 3];
// let arr = [1, 4, 5, 6, 2, 3];
let arr = [4, 4];

// 만약 stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
// stk에 원소가 있고, stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 stk의 뒤에 추가하고 i에 1을 더합니다.
// stk에 원소가 있는데 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 stk에서 제거합니다.
// 위 작업을 마친 후 만들어진 stk를 return 하는 solution 함수를 완성해 주세요.

function solution(arr) {
    var stk = [];
    for (let i = 0; i < arr.length; i++) {
        if (stk.length === 0) {
            stk.push(arr[i]);
        } else {
            let lastValue = stk[stk.length - 1];
            while (lastValue >= arr[i]) {
                stk.pop();
                lastValue = stk[stk.length - 1];
            }

            if (lastValue < arr[i]) {
                stk.push(arr[i]);
            }
        }

        if (stk.length === 0) {
            stk.push(arr[i]);
        }
    }

    return stk;
}

console.log(solution(arr));

// 2023.09.13 1143 Done

// function solution(arr) {
//     var stk = [];

//     for(let i=0; i<arr.length; i++) {
//         if(stk.length === 0) {
//             stk.push(arr[i]);
//             continue;
//         }

//         if(stk[stk.length - 1] < arr[i]) {
//             stk.push(arr[i]);
//             continue;
//         }

//         stk.pop();
//         i--;
//     }

//     return stk;
// }