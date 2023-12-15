// num	total	result
// 3	12	[3, 4, 5]
// 5	15	[1, 2, 3, 4, 5]
// 4	14	[2, 3, 4, 5]
// 5	5	[-1, 0, 1, 2, 3]
// let num = 3;
// let total = 12;
// let num = 5;
// let total = 15;
let num = 4;
let total = 14;
// let num = 5;
// let total = 5;

function solution(num, total) {
    var answer = [];
    if (num % 2 === 0) {
        let mid = Math.floor(total / num);
        let start = mid - (num / 2 - 1);
        for (let i = 0; i < num; i++) {
            answer.push(start);
            start++
        }
    } else {
        let mid = total / num;
        let start = mid - Math.floor((num) / 2);
        for (let i = 0; i < num; i++) {
            answer.push(start)
            start++;
        }
    }
    return answer;
}

console.log(solution(num, total));

function solution(num, total) {
    var min = Math.ceil(total/num - Math.floor(num/2));
    var max = Math.floor(total/num + Math.floor(num/2));

    return new Array(max-min+1).fill(0).map((el,i)=>{return i+min;});
}

function solution(num, total) {
    const a = (2 * total / num + 1 - num) / 2
    return Array(num).fill().map((_, i) => i + a)
}

function solution(num, total) {
    let answer = []

    for(let i = 1; i <= num; i++) {
        answer.push(i)
    }

    const resultAv = parseInt(total / num)
    const resultAvIdx = num % 2 === 0 ? parseInt(num / 2) - 1 : parseInt(num / 2)
    const beforeV = answer[resultAvIdx]

    return answer.map(i => i = i + (resultAv - beforeV))
}