// arr	result
// [5, 1, 4]	[5, 5, 5, 5, 5, 1, 4, 4, 4, 4]
// [6, 6]	[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
// [1]	[1]

let arr = [5, 1, 4];

// function solution(arr) {
//     var answer = [];
//     arr.forEach(v => {
//         let count = 1;
//         while(v >= count) {
//             answer.push(v);
//             count++;
//         }
//     })
//     return answer;
// }

function solution(arr) {
    let answer = [];
    answer = arr.reduce((a, c) => a.concat(Array(c).fill(c)), [])
    console.log(answer);
}

solution(arr);