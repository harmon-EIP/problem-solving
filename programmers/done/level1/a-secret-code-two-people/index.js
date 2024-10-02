// s	skip	index	result
// "aukks"	"wbqd"	5	"happy"

const s = "abc";
const skip = "bcde"; // [ 119, 98, 113, 100 ]
const index = 2;

// const s = "aukks";
// const skip = 'wbqd';
// const index = 5;

// skip array에 나오는 숫자들을 ascii array로 만들어서, s에서 하나씩 증가시키며 비교하여, 맞으면 패스, 아니면 그대로 진행.
// 만약 123 이상의 숫자가 되면, 97로 변경. 123 = 97

function solution(s, skip, index) {
    let answer = '';
    let skipAscii = [];

    [...skip].forEach(v => {
        skipAscii.push(v.charCodeAt());
    });

    [...s].forEach(v => {
        let startASCII = v.charCodeAt();
        for (let i = 1; i <= index; i++) {
            startASCII++;
            if (startASCII > 122) {
                startASCII -= 26;
            }

            while (skipAscii.includes(startASCII)) {
                startASCII++;
                if (startASCII > 122) {
                    startASCII -= 26;
                }
            }

            if (i === index) {
                answer += String.fromCharCode(startASCII);
            }
        }
    })

    return answer;
}

console.log(solution(s, skip, index));

// 2024. 06. 07 정답

/** 다른 정답
function solution(s, skip, index) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));
    return s.split("").map(c => alphabet[(alphabet.indexOf(c) + index) % alphabet.length]).join("");
}
 */