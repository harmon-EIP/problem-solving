// k	m	score	result
// 3	4	[1, 2, 3, 1, 2, 3, 1]	8
// 4	3	[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]	33
// k -> 최대 사과 점수
// m -> 한 상자에 들어가는 사과의 수
// score -> 사과들의 점수

const k = 3;
const m = 4;
const score = [1, 2, 3, 1, 2, 3, 1];

// const k = 4;
// const m = 3;
// const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

/**
 
score 내림차순 정렬
m의 값에 따라서 배열 분리
배열의 최소값 * m 으로 사과 이익 계산

 */

function solution(k, m, score) {
    var answer = 0;
    const boxNumber = Math.floor(score.length / m);
    const descendScore = score.sort((a, b) => b - a);
    let boxArr = [];
    let count = 0;
    let temp = []

    for (let i = 0; i < descendScore.length; i++) {
        temp.push(descendScore[i]);
        if ((i + 1) % m === 0 && i !== 0) {
            temp.sort((a, b) => a - b);
            boxArr.push(temp);
            count++;
            temp = [];
        }
    }
    boxArr.forEach(v => {
        answer += v[0] * m;
    })

    return answer;
}

console.log(solution(k, m, score));

// 
// solution = (_, m, s) => s.sort().filter((_, i) => !((s.length - i) % m)).reduce((a, v) => a + v, 0) * m

// function solution(k, m, score) {
//     let answer = 0;
//     const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
//     for (let i = 0; i < sortedScore.length; i += m) {
//         answer += sortedScore[i] * m;
//     }
//     return answer;
// }

