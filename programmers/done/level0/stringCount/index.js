// my_string	result
// "Programmers"	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]
let my_string = "ABCASDCSaasdlkn"

// 'A': 65
// 'a': 97

// string.charCodeAt(0);
// string.fromCharCode(122);

function solution(my_string) {
    var answer = new Array(52).fill(0);

    [...my_string].forEach(v => {
        let result = v.charCodeAt(0);
        if (result >= 65 && result <= 90) { // 대문자
            answer[result - 65]++;
        } else if (result >= 97 && result <= 122) { // 소문자
            answer[result - 97 + 26]++;
        }
    })
    return answer;
}

function solution2(m) {
    var answer = [];
    let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let a = [];
    a.length = 52;
    a.fill(0);

    m.split("").map((n) => {
        a[al.indexOf(n)] += 1
    })

    return a;
}


console.log(solution(my_string));