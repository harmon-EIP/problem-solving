// n	result
// 10	3
// 12	11

let n = 7

function solution(n) {
    var answer = 0;
    for (let i = 0; i < n; i++) {
        if (n % i === 1) {
            answer = i; break;
        }
    }

    return answer;
}

console.log(solution(n));

// done. 2023. 09. 20.

// function solution(n, x = 1) {    
//     while (x++) {
//         if (n % x === 1) {
//             return x;
//         }
//     }    
// }
