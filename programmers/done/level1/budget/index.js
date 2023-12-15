// d	budget	result
// [1,3,2,5,4]	9	3
// [2,2,3,3]	10	4
// let d = [1, 3, 2, 5, 4];
// let budget = 9;
let d = [2, 2, 3, 3];
let budget = 10;

function solution(d, budget) {
    var answer = 0;
    d.sort((a, b) => a - b);

    d.forEach(v => {
        budget - v >= 0 ? answer++ : answer;
        budget -= v;
    })

    return answer;
}

console.log(solution(d, budget));

// done 2023. 10. 25

// success code 1
function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((count, price) => {
        return count + ((budget -= price) >= 0);
    }, 0);
}
