// myString	result
// "axbxcxdx"	["a","b","c","d"]
// "dxccxbbbxaaaa"	["aaaa","bbb","cc","d"]

let myString = "dxccxbbbxaaaa";

function solution(myString) {
    return answer = myString.split('x').sort().filter(v => v !== '');
}

console.log(solution(myString));
