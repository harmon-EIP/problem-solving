// n	return
// 12	28
// 5	6

let n = 12;

function solution(n) {
    var answer = 0;

    for (let i = 0; i <= n; i++) {
        if (n % i === 0) answer += i;
    }

    return answer;
}

console.log(solution(n));

// 2023. 09. 19 Tue

// function solution(n, a=0, b=0) {
//     return n<=a/2 ? b : 
//   solution(n, a+1, b+=n%a ? 0 : a);
// }