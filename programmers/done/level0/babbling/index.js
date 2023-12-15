// babbling	result
// ["aya", "yee", "u", "maa", "wyeoo"]	1
// ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]	3

// let babbling = ["aya", "yee", "u", "maa", "wyeoo"];
// let result = 1;

let babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];
let result = 3;

function solution(babbling) {
    let result = 0;
    let answerList = ["aya", "ye", "woo", "ma"];
    babbling.forEach(v => {
        answerList.forEach(item => {
            v = v.replace(item, ".");
        })
        v = v.replace(/\./g, '');
        v === '' ? result++ : result;
    })

    return result;
}

console.log(solution(babbling));

// done 2023. 09. 19.

// function solution2(babbling) {
//     var answer = 0;
//     const regex = /^(aya|ye|woo|ma)+$/;

//     babbling.forEach(word => {
//         console.log('word', word);
//         console.log('regex.text(word)', regex.test(word));
//         if (regex.test(word)) answer++;
//     })

//     return answer;
// }

// console.log(solution2(babbling));
