const N = 5;
// const stages = [2, 1, 2, 6, 2, 4, 3, 3];
// const result = [3, 4, 2, 1, 5];

// const stages = [4, 4, 4, 4, 4];
// const result = [4, 3, 1, 2];

// const stages = [1, 1, 2, 2, 3, 4, 4, 5];
const stages = [1, 1, 1, 1];

function solution(N, stages) {
    var answer = new Array(N + 1).fill(0);
    let challengePeople = stages.length;
    let failureRate = 0;
    let answerTemp = [];
    let resultArr = [];

    stages.sort((a, b) => a - b);

    for (let i = 0; i < stages.length; i++) {
        answer[stages[i] - 1]++;
    }

    answer.forEach((v, idx) => {
        failureRate = answer[idx] / challengePeople || 0

        challengePeople = challengePeople - v;

        answer[idx] = failureRate;
    })

    answer.pop();
    answerTemp = JSON.parse(JSON.stringify(answer));

    answerTemp.sort((a, b) => b - a);

    answerTemp.forEach(v => {
        let test = answer.indexOf(v);
        answer[test] = -1;

        resultArr.push(test + 1);
    })

    return resultArr;
}

console.time('check time');
console.log(solution(N, stages))
console.timeEnd('check time');

// 2023. 12. 20 done