// rank	attendance	result
// [3, 7, 2, 5, 4, 6, 1]	[false, true, true, true, true, false, false]	20403
// [1, 2, 3]	[true, true, true]	102
// [6, 1, 5, 2, 3, 4]	[true, false, true, false, false, true]	50200

const rank = [3, 7, 2, 5, 4, 6, 1];
const attendance = [false, true, true, true, true, false, false];

function solution(rank, attendance) {
    let answer = 0;
    let arr = [];

    rank.forEach((v, idx) => {
        if (attendance[idx]) {
            arr.push(v);
        }
    })
    arr.sort((a, b) => a - b);

    answer = 10000 * rank.indexOf(arr[0]) + 100 * rank.indexOf(arr[1]) + rank.indexOf(arr[2])

    return answer;
}

console.log(solution(rank, attendance))

// Done. 2023.08.08