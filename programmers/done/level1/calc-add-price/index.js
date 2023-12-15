// price	money	count	result
// 3	20	4	10

let price = 3;
let money = 20;
let count = 4;
// result = 10;

function solution(price, money, count) {
    var answer = -1;
    let totalMoney = 0;

    for (let i = 1; i <= count; i++) {
        totalMoney += price * i;
    }
    answer = totalMoney - money;

    return answer > 0 ? answer : 0;
}

console.log(solution(price, money, count));

// done 2023 1012

// function solution(price, money, count) {
//     const tmp = price * count * (count + 1) / 2 - money;
//     return tmp > 0 ? tmp : 0;
// }

// let solution = (p, m, c) => Math.max(p * c * ++c / 2 - m, 0)