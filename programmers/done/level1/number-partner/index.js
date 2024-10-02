// X	Y	result
// "100"	"2345"	"-1"
// "100"	"203045"	"0"
// "100"	"123450"	"10"
// "1232100"	"4253100"	"32100"
// "5525"	"1255"	"552"

const X = "1232100";
const Y = "4253100";
// result = "-1";

function solution(X, Y) {
    let answer = '';

    X = [...X];
    Y = [...Y];

    for (let i = 9; i >= 0; i--) {
        let countX = X.filter(v => v == i).length
        let countY = Y.filter(v => v == i).length

        if (countX > countY) {
            for (let j = 0; j < countY; j++) {
                answer += i;
            }
        } else {
            for (let k = 0; k < countX; k++) {
                answer += i;
            }
        }
    }

    if (parseInt(answer) === 0) {
        answer = '0'
    }

    return answer === '' ? '-1' : answer;
}

console.log('answer:', solution(X, Y));

// 다른 풀이
function solution(X, Y) {
    const commonNumbers = [...new Set(X.split(''))].filter((number) => {
        return Y.includes(number);
    }).sort((a, b) => b - a)

    if (!commonNumbers.length) return '-1';

    if (!Number(commonNumbers[0])) return '0';

    return commonNumbers.map((number) => {
        const Xcount = X.split('').reduce((count, Xnumber) => {
            if (Xnumber === number) return count += 1;

            return count;
        }, 0)

        const Ycount = Y.split('').reduce((count, Ynumber) => {
            if (Ynumber === number) return count += 1;

            return count;
        }, 0)

        return Xcount <= Ycount ? number.repeat(Xcount) : number.repeat(Ycount)
    }).join('')
}