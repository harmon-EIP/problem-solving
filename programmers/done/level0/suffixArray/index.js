// my_string	result
// "banana"	["a", "ana", "anana", "banana", "na", "nana"]
// "programmers"	["ammers", "ers", "grammers", "mers", "mmers", "ogrammers", "programmers", "rammers", "rogrammers", "rs", "s"]

let my_string = "programmers";
let result = ["ammers", "ers", "grammers", "mers", "mmers", "ogrammers", "programmers", "rammers", "rogrammers", "rs", "s"];

function solution(my_string) {
    var answer = [];
    let length = my_string.length;
    for (let i = 1; i <= length; i++) {
        let temp = my_string.slice(-i);
        answer.push(temp);
    }

    answer.sort();
    return answer;
}

solution(my_string);