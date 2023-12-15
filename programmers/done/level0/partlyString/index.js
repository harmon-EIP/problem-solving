// myString	pat	result
// "AbCdEFG"	"dE"	"AbCdE"
// "AAAAaaaa"	"a"	"AAAAaaaa"
let myString = "AbCdEFG";
let pat = "dE";

function solution(myString, pat) {
    var answer = '';
    let lastIndex = myString.lastIndexOf(pat);
    answer = myString.slice(0, lastIndex) + pat
    return answer;
}

console.log(solution(myString, pat));