// [".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."]
// 	2	["..xxxx......xxxx..", "..xxxx......xxxx..", "xx....xx..xx....xx", "xx....xx..xx....xx", "xx......xx......xx", "xx......xx......xx", "..xx..........xx..", "..xx..........xx..", "....xx......xx....", "....xx......xx....", "......xx..xx......", "......xx..xx......", "........xx........", "........xx........"]

// ["x.x", ".x.", "x.x"]	3	["xxx...xxx", "xxx...xxx", "xxx...xxx", "...xxx...", "...xxx...", "...xxx...", "xxx...xxx", "xxx...xxx", "xxx...xxx"]

// let picture = [".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."];
// let k = 2;

let picture = ["x.x", ".x.", "x.x"];
let k = 3;

// function solution(picture, k) {
//     let answer = [];

//     picture.forEach(v => {
//         let result = '';
//         v.split('').forEach(e => {
//             for (let i = 0; i < k; i++) {
//                 result = result + e;
//             }
//         })
//         for (let j = 0; j < k; j++) {
//             answer.push(result);
//         }
//     })

//     return answer;
// }

// console.log(solution(picture, k));

// 2023. 09. 13.

// use reduce
function solution(picture, k) {
    let answer = [];

    picture.forEach((line) => {
        const expanded = [...line].reduce((acc, cur) => acc + cur.repeat(k), '');

        for (let i = 0; i < k; i++) {
            answer.push(expanded);
        }
    })

    return answer;
}

console.log(solution(picture, k));