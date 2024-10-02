// 입출력 예
// n	lost	reserve	    return
// 5	[2, 4]	[1, 3, 5]	5
// 5	[2, 4]	[3]	        4
// 3	[3]	    [1]	        2
// 6    [2, 4]  [1, 5]      6
// const n = 13;
// const lost = [2, 4, 6, 9, 10];
// const reserve = [3, 5, 7, 9, 10];

// const n = 5;
// const lost = [2, 4];
// const reserve = [1, 3, 5];

const n = 6;
const lost = [2, 4];
const reserve = [1, 5];

function solution(n, lost, reserve) {
    var answer = 0;

    let filteredLost = lost.filter(v => !reserve.includes(v));
    let filteredReserve = reserve.filter(v => !lost.includes(v));

    let minusCheckFunction = (filteredLost, filteredReserve) => {
        let ascFilteredLost = filteredLost.filter(v => !filteredReserve.includes(v - 1));
        let ascFilteredReserve = filteredReserve.filter(v => !filteredLost.includes(v + 1));

        let resultFilterdLost = ascFilteredLost.filter(v => !ascFilteredReserve.includes(v + 1));

        return resultFilterdLost.length;
    }

    let plusCheckFunction = (filteredLost, filteredReserve) => {
        let descFilteredLost = filteredLost.filter(v => !filteredReserve.includes(v + 1));
        let descFilteredReserve = filteredReserve.filter(v => !filteredLost.includes(v - 1));

        let resultFilterdLost = descFilteredLost.filter(v => !descFilteredReserve.includes(v - 1));

        return resultFilterdLost.length;
    }

    const minusCheckCount = minusCheckFunction(filteredLost, filteredReserve);
    const plusCheckCount = plusCheckFunction(filteredLost, filteredReserve);

    const exceptStudent = (minusCheckCount <= plusCheckCount) ? minusCheckCount : plusCheckCount;
    answer = n - exceptStudent;

    return answer;
}

console.log(solution(n, lost, reserve));

// 기타 성공코드
/**
function solution(n, lost, reserve) {
    const students = {};
    let answer = 0;
    for(let i = 1; i <= n; i++){
        students[i] = 1;
    }
    lost.forEach(number => students[number] -= 1);
    reserve.forEach(number => students[number] += 1);

    for(let i = 1; i <= n; i++){
        if(students[i] === 2 && students[i-1] === 0){
                students[i-1]++;
                students[i]--;
        } else if(students[i] === 2 && students[i+1] === 0){
                students[i+1]++;
                students[i]--;
        }
    }
    for(let key in students){
        if(students[key] >= 1){
            answer++;
        }
    }
    return answer;
}
 */
// 2023. 03. 31