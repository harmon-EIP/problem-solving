// lottos	win_nums	result
// [44, 1, 0, 0, 31, 25]	[31, 10, 45, 1, 6, 19]	[3, 5]
// [0, 0, 0, 0, 0, 0]	[38, 19, 20, 40, 15, 25]	[1, 6]
// [45, 4, 35, 20, 3, 9]	[20, 9, 3, 45, 4, 35]	[1, 1]

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

// const lottos = [0, 0, 0, 0, 0, 0];
// const win_nums = [38, 19, 20, 40, 15, 25];

// const lottos = [45, 4, 35, 20, 3, 9];
// const win_nums = [20, 9, 3, 45, 4, 35];

function solution(lottos, win_nums) {
    var answer = [];
    let [rankMax, rankMin] = [0, 0]

    // lottos array에 0의 개수
    const countZero = lottos.filter(e => !e).length;

    console.log('countZero', countZero)

    // 몇개 같은지 확인
    let sameNumberCount = 0;
    lottos.forEach(v => {
        win_nums.includes(v) ? sameNumberCount++ : sameNumberCount;
    })

    // rankMin
    if (sameNumberCount > 0) {
        rankMin = 7 - sameNumberCount;
    } else {
        rankMin = 6;
    }

    // rankMax.
    let countMax = countZero + sameNumberCount;
    if (countMax > 0) {
        rankMax = 7 - countMax;
    } else {
        rankMax = 6;
    }

    answer = [rankMax, rankMin]

    return answer;
}

console.log(solution(lottos, win_nums));

/** 
 *  
  처음에 같은숫자 개수에 따른 최소순위 결정
  6개 -> 1등
  5개 -> 2등
  4개 -> 3등
  3개 -> 4등
  2개 -> 5등
  1, 0개 -> 6등
 *  
 */

/**
// 다른 정답코드
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}
 */