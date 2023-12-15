// myStr	result
// "baconlettucetomato"	["onlettu", "etom", "to"]
// "abcd"	["d"]
// "cabab"	["EMPTY"]
// let myStr = "baconlettucetomato"
let myStr = "abcd"
// let myStr = "cabab"

function solution(myStr) {
    var answer = [];
    let regex = /a|b|c/;
    answer = myStr.split(regex).filter(v => v !== '');
    console.log(answer);
    console.log(answer == null)
    return answer.join() === '' ? ["EMPTY"] : answer;
}

console.log(solution(myStr));
