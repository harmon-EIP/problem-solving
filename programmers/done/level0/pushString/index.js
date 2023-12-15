// A	B	result
// "hello"	"ohell"	1
// "apple"	"elppa"	-1
// "atat"	"tata"	1
// "abc"	"abc"	0

let A = "apple";
let B = "elppa";

function solution(A, B) {
    var answer = 101;
    let length = A.length;
    let count = 0;
    if (A === B) answer = 0
    A.split('').forEach(v => {
        count++;
        let temp = A[length - 1];
        A = temp + A.slice(0, length - 1)
        if (A === B) {
            answer = answer > count ? count : answer;
        }
    })
    return answer > 100 ? -1 : answer;
}

console.log(solution(A, B));

// let solution=(a,b)=>(b+b).indexOf(a)

// 2023.07.26 Done.