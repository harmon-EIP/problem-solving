// absolutes	signs	result
// [4,7,12]	[true,false,true]	9
// [1,2,3]	[false,false,true]	0

let absolutes = [4, 7, 12];
let signs = [true, false, true];

function solution(absolutes, signs) {
    var answer = 0;
    signs.forEach((v, idx) => {
        answer += v ? absolutes[idx] : -absolutes[idx];
    })
    return answer;
}

console.log(solution(absolutes, signs));

// function solution(absolutes, signs) {

//     return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
// }
