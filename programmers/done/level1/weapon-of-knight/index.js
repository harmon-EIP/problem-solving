// number	limit	power	result
// 5	3	2	10
// 10	3	2	21
const number = 100000;
const limit = 3;
const power = 2;
const result = 10;

function solution(number, limit, power) {
    let answer = 0;
    const submultipleArr = [];

    for (let i = 1; i <= number; i++) {
        submultipleArr.push(checkSubMultiple(i, limit, power))
    }

    answer = submultipleArr.reduce((acc, cur) => {
        return acc + cur
    }, 0);

    return answer;
}

function checkSubMultiple(num, limit, power) {
    let subMultipleCount = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            subMultipleCount++
            if (i * i !== num) {
                subMultipleCount++
            }
        }
    }

    return subMultipleCount > limit ? power : subMultipleCount;
}

console.time('check')
console.log(solution(number, limit, power))
console.timeEnd('check');

