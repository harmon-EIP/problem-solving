// s	result
// "banana"	[-1, -1, -1, 2, 2, 2]
// "foobar"	[-1, -1, 1, -1, -1, -1]
// let s = "banana";
let s = "foobar";

function solution(s) {
    var answer = [];
    let alphaArr = new Array(26).fill(-1);

    [...s].forEach((e, idx) => {
        let alphaPos = e.charCodeAt(0) - 97;
        if (alphaArr[alphaPos] !== -1) {
            answer.push(idx - alphaArr[alphaPos]) // 앞 알파벳과의 거리
        } else { // -1 일 때
            answer.push(-1) // 앞 알파벳과의 거리
        }

        alphaArr[alphaPos] = idx;
    })

    return answer;
}

console.log(solution(s));

// done 2023. 11. 2.

// success code 1
// function solution(s) {
//     const hash={};

//     return [...s].map((v,i)=>{
//         let result = hash[v] !== undefined ? i - hash[v] : -1;
//         hash[v] = i;
//         return result;
//     });
// }

