// strArr	result
// ["a","bc","d","efg","hi"]	2
let strArr = ["a", "bc", "d", "efg", "hi"];

function solution(strArr) {
    var answer = 0;
    let arr = new Array(100000).fill(0);
    strArr.forEach(v => {
        let length = v.split('').length;
        if (arr[length] === undefined) {
            arr[length] = 1;
        } else {
            arr[length]++;
        }
    })
    answer = Math.max(...arr);
    return answer;
}

console.log(solution(strArr))