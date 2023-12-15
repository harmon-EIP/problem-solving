// numbers	result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	6

// let numbers = [1, 2, 3, 4, 6, 7, 8, 0];
let numbers = [5, 8, 4, 0, 6, 7, 9];

function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc + cur, 0);;
}

console.log(solution(numbers));

// Done 20231010

// function solution(numbers) {
//     let answer = 0;

//     for(let i = 0; i <= 9; i++) {
//         if(!numbers.includes(i)) answer += i;
//     }

//     return answer;
// }

