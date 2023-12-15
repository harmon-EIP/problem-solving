// s	return
// "try hello world"	"TrY HeLlO WoRlD"
let s = "TRY hello world";
// let s = "  aaa   "

// function solution(s) {
//     var answer = '';

//     s.split(' ').forEach((v, idx) => {
//         console.log('v', v);
//         [...v].forEach((e, idx) => {
//             answer += idx % 2 !== 0 ? e.toLowerCase() : e.toUpperCase();
//         })
//         answer += ' ';
//     })
//     return answer.substring(0, answer.length - 1);
// }

function solution(s) {
    var answer = '';

    answer = s.split(' ').map((v, idx) => {
        let letter = [...v].map((e, idx) => {
            let answer = '';
            answer += idx % 2 !== 0 ? e.toLowerCase() : e.toUpperCase();
            return answer;
        }).join('');

        return letter
    }).join(' ')

    return answer;
}

console.log(solution(s));

// done 2023. 10. 26

// success code 1
// function toWeirdCase(s){
//     return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
  
//   }
  