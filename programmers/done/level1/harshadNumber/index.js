// x	return
// 10	true
// 12	true
// 11	false
// 13	false

let x = 13

function solution(x) {
    let xValue = x;
    let sumValue = 0;

    while (x > 0) {
        let temp = x % 10;
        sumValue += temp;
        x = Math.floor(x / 10)
    }

    return xValue % sumValue === 0 ? true : false;
}

console.log(solution(x));

// function solution(x) {
//     return x%eval([...x.toString()].join("+")) ? false : true;
// }
