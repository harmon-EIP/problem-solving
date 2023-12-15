// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"

// let s = "AB"
// let n = 1

// let s = "z";
// let n = 1;

let s = "a B z";
let n = 4

function solution(s, n) {
    var answer = '';
    [...s].forEach(e => {
        let asciipos = e.charCodeAt(0)
        if (asciipos >= 65 && asciipos <= 90) { // 대문자
            let res = asciipos + n > 90 ? asciipos + n - 26 : asciipos + n;
            answer += String.fromCharCode(res);
        } else if (asciipos >= 97 && asciipos <= 122) { // 소문자
            let res = asciipos + n > 122 ? asciipos + n - 26 : asciipos + n;
            answer += String.fromCharCode(res);
        } else { // 특수문자 (공백)
            answer += e;
        }
    })

    return answer;
}

console.log(solution(s, n));

// done 2023. 10. 30.

// val.charCodeAt(0);
// String.fromCharCode(65);

// success code 1
function solution(s, n) {
    var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
    return s.split('').map(e => chars[chars.indexOf(e)+n]).join('');
}

// success code 2
function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}
