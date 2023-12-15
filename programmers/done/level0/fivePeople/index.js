// names	result
// ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]	["nami", "vex"]

let names = ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"];

function solution(names) {
    var answer = [];
    let length = Math.ceil(names.length / 5);

    for (let i = 0; i < length; i++) {
        let result = names[i * 5];
        answer.push(result);
    }

    return answer;
}

solution(names);