// s	return
// "abcde"	"c"
// "qwer"	"we"

// let s = "abcde"; // "c"
let s = "qwer"; // "we"

function solution(s) {
    let answer = '';
    const length = s.length;

    if (length % 2 !== 0) { // 홀수
        answer = s.split('').splice(length / 2, 1).join('');

    } else if (length % 2 === 0) { // 짝수
        answer = s.split('').splice(length / 2 - 1, 2).join('');
    }

    return answer;
}

console.log(solution(s));

// done 20231011

// function solution(s) {
//     return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }
