// s	answer
// "pPoooyY"	true
// "Pyy"	false

// let s = "pPoooyY"; // true
let s = "Pyy"; // false

function solution(s) {
    var answer = true;
    let countP = countY = 0;
    s.toString().split('').forEach(v => {
        if (v.toLowerCase() === 'p') {
            countP++;
        } else if (v.toLowerCase() === 'y') {
            countY++;
        }
    })

    if (countP === countY) {
        answer = true
    } else if (countP === 0 || countP !== countY) {
        answer = false;
    }

    return answer;
}

console.log(solution(s));

// done 2023. 09. 20. wed

// function numPY(s) {
//     return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
// }

// function numPY(s) {
//     return s.match(/p/ig).length == s.match(/y/ig).length
// }

