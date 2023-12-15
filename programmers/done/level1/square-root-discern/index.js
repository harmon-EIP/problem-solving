// n	return
// 121	144
// 3	-1
let n = 121; // 144
// let n = 3; // -1


function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

// done 2023. 09. 20

console.log(solution(n));