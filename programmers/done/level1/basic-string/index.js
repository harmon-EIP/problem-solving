// s	return
// "a234"	false
// "1234"	true

let s = "a234"; // false
// let s = "1234"; // true
// let s = "e21a" // false
// let s = "aa"; // false
// let s = "00000000" // true
// let s = "aaaaaaaa"; // false 
// let s = "1234aa2"; // false
// let s = "0x16" // false

function solution(s) {
    let answer = true;
    if (s.length === 4 || s.length === 6) {
        answer = s.split('').every(v => !isNaN(v));
    } else {
        answer = false;
    }

    return answer;
}
console.log(solution(s));

// Done 2023 10 16

// function solution(s) {
//     if (s.length != 4 && s.length != 6) return false;
//     for (var i = 0; i < s.length; i++) {
//         if (isNaN(Number(s[i]))) return false;
//     }
//     return true;
// }

// function alpha_string46(s) {
//     var regex = /^\d{6}$|^\d{4}$/;

//     return regex.test(s);
// }
