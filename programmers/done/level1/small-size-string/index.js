// t	p	result
// "3141592"	"271"	2
// "500220839878"	"7"	8
// "10203"	"15"	3
// let t = "3141592";
// let p = "271";
// let t = "500220839878";
// let p = "7";
let t = "10203";
let p = "15";

function solution(t, p) {
    let answer = 0;
    let stringSize = p.length;

    let subset = [...t].map((_, idx) => {
        let result = t.slice(idx, idx + stringSize);
        if (result.length === stringSize) return result;
    })

    subset.forEach(v => {
        v <= p ? answer++ : answer;
    })

    return answer;
}

console.log(solution(t, p));

// done 2023. 10. 27

// success code 1
// function solution(t, p) {
//     let count = 0;
//     for(let i=0; i<=t.length-p.length; i++) {
//         let value = t.slice(i, i+p.length);
//         if(+p >= +value) count++;
//     }
//     return count;
// }
