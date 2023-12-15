// phone_number	return
// "01033334444"	"*******4444"
// "027778888"	"*****8888"

let phone_number = "01033334444";
// let phone_number = "027778888";

function solution(phone_number) {
    return phone_number.split('').map((v, idx) => {
        return idx < phone_number.length - 4 ? '*' : v;
    }).join('');
}

console.log(solution(phone_number));

// Done 20231010

/*

1. phone_number 개수 체크, 0부터 length-4까지 * 으로 slice.

*/

// function hide_numbers(s){
//     return s.replace(/\d(?=\d{4})/g, "*");
//   }