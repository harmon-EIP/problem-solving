// 입출력 예
// q	r	code	result
// 3	1	"qjnwezgrpirldywt"	"jerry"
// 1	0	"programmers"	"programmers"
let q = 3
let r = 1
let code = "qjnwezgrpirldywt"

function solution(q, r, code) {
    var answer = '';
    code.split('').forEach((v, idx) => {
        if (idx % q === r) {
            answer += v;
        }
    })
    return answer;
}

function solution(q, r, code) {
    return [...code].filter((_, i) => i % q === r).join('');
}

console.log(solution(q, r, code));