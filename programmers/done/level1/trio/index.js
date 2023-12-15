// n	result
// number	result
// [-2, 3, 0, 2, -5]	2
// [-3, -2, -1, 0, 1, 2, 3]	5
// [-1, 1, -1, 1]	0
// let number = [-2, 3, 0, 2, -5];
// let number = [-3, -2, -1, 0, 1, 2, 3];
let number = [-1, 1, -1, 1];

function solution(number) {
    var answer = 0;
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            for (let k = j + 1; k < number.length; k++) {
                console.log('i, j, k', i, j, k);
                if (number[i] + number[j] + number[k] === 0) answer++;
            }
        }
    }

    return answer;
}

console.log(solution(number));

// done 2023. 10. 27

// success code 1
// function solution(number) {
//     let result = 0;

//     const combination = (current, start) => {
//         if (current.length === 3) {
//             result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
//             return;
//         }

//         for (let i = start; i < number.length; i++) {
//             combination([...current, number[i]], i + 1);
//         }
//     }
//     combination([], 0);
//     return result;
// }