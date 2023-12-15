// answers	return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]

const answer = [1, 2, 3, 4, 5];
// const answer = [1, 3, 2, 4, 2];

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

function solution(answers) {
    var answer = [];
    let people1 = new Array(10020).fill([1, 2, 3, 4, 5]).flat();
    let people2 = new Array(10020).fill([2, 1, 2, 3, 2, 4, 2, 5]).flat();
    let people3 = new Array(10020).fill([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]).flat();
    let score = [score1, score2, score3] = [0, 0, 0];

    answers.forEach((v, idx) => {
        score1 += people1[idx] === v ? 1 : 0;
        score2 += people2[idx] === v ? 1 : 0;
        score3 += people3[idx] === v ? 1 : 0;
    })

    score = [score1, score2, score3]

    let maxValue = Math.max(...score);
    for (let i = 0; i < score.length; i++) {
        if (score[i] === maxValue) {
            answer.push(i + 1);
        }
    }

    return answer.sort();
}

console.log(solution(answer));

// done 2023. 11. 24

// function solution(answers) {
//     var answer = [];
//     var a1 = [1, 2, 3, 4, 5];
//     var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
//     var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//     var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
//     var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
//     var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
//     var max = Math.max(a1c,a2c,a3c);

//     if (a1c === max) {answer.push(1)};
//     if (a2c === max) {answer.push(2)};
//     if (a3c === max) {answer.push(3)};


//     return answer;
// }
