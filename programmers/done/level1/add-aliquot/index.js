// left	right	result
// 13	17	43
// 24	27	52

// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
let left = 24;
let right = 27;

function solution(left, right) {
    var answer = 0;
    for (; left <= right; left++) {
        let count = 0;
        for (let i = 1; i <= left; i++) {
            if (left % i === 0) {
                count++
            }
        }

        answer += count % 2 === 0 ? left : -left;

    }
    return answer;
}

console.log(solution(left, right))

// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }