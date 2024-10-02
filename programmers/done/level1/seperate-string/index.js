// s	result
// "banana"	3
// "abracadabra"	6
// "aaabbaccccabba"	3

// const s = "banana";
const s = "abracadabra";
// const s = "aaabbaccccabba";

function solution(s) {
    let answer = 0;
    let startChar = '';
    let [countSame, countOther] = [0, 0];

    s.split('').forEach((v, idx) => {
        if (countSame === countOther) {
            startChar = v;
        }

        startChar === v ? countSame++ : countOther++;
        if (countSame === countOther) {
            answer++;
            countSame = countOther = 0;
        }

        if ((countSame > 0 || countOther > 0) && idx === s.split('').length - 1) {
            answer++;
        }
    })

    return answer;
}

console.log(solution(s));