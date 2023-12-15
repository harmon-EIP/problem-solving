// n	return
// 12345	[5,4,3,2,1]

let n = 12345;

function solution(n) {
    var answer = [];
    n.toString().split('').forEach(v => answer.unshift(+v));
    return answer;
}

console.log(solution(n));

// done 2023. 09. 20

// function solution(n) {
//     // 문자풀이
//     // return (n+"").split("").reverse().map(v => parseInt(v));

//     // 숫자풀이
//     var arr = [];

//     do {
//         arr.push(n%10);
//         n = Math.floor(n/10);
//     } while (n>0);

//     return arr;
// }

// return n.toString().split('').reverse().map(o => o = parseInt(o));
// return n.toString().split('').reverse().map(o => o = parseInt(o));
