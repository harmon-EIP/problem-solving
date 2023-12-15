// a	b	result
// "582"	"734"	"1316"
// "18446744073709551615"	"287346502836570928366"	"305793246910280479981"
// "0"	"0"	"0"
let a = "18446744073709551615"
let b = "287346502836570928366"

function solution(a, b) {
    var answer = '';
    answer = BigInt(a) + BigInt(b);
    return String(answer);
}

console.log(solution(a, b));