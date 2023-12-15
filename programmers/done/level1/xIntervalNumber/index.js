// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]

let x = 2;
let n = 5;
// let x = 50000000;
// let n = 1000;

function solution(x, n) {
    var answer = [];
    // for (let i = 1; i <= n; i++) {
    //     answer.push(x * i)
    // }
    let result = Array(n).fill(x)

    console.log(result);

    return answer;
}

console.log(solution(x, n));

// 2023. 09. 19. Tue

// function solution(x, n) {
//     return Array(n).fill(x).map((v, i) => (i + 1) * v)
// }

// return Array.from({length: n},(v,index)=>(index+1)*x);