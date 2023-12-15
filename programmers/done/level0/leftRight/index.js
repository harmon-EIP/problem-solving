// str_list	result
// ["u", "u", "l", "r"]	["u", "u"]
// ["l"]	[]

// let str_list = ["u", "u", "l", "r"]
// let str_list = ["l"]
let str_list = ["r", "u", "u"];

function solution(str_list) {
    var answer = [];
    let leftIndex = undefined;
    let rightIndex = undefined;

    leftIndex = str_list.indexOf('l') < 0 ? 100 : str_list.indexOf('l');
    rightIndex = str_list.indexOf('r') < 0 ? 100 : str_list.indexOf('r');

    if (leftIndex < rightIndex) {
        answer = str_list.slice(0, leftIndex);
    } else if (leftIndex > rightIndex) {
        answer = str_list.slice(rightIndex + 1, str_list.length);
    }

    return answer;
}

function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 'l') return arr.slice(0, i);
        if (arr[i] === 'r') return arr.slice(i + 1);
    }
    return [];
}

console.log(solution(str_list));