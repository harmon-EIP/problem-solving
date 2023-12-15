/**
 * [[0, 1], [2, 5], [3, 9]]	    2
 * [[-1, 1], [1, 3], [3, 9]]	0
 * [[0, 5], [3, 9], [1, 10]]	8
 */

// var lines = [[0, 1], [2, 5], [3, 9]];
// var lines = [[-1, 1], [1, 3], [3, 9]];
// var lines = [[0, 5], [3, 9], [1, 10]];
// var lines = [[0, 5], [3, 8], [7, 10]];

function solution(lines) {
    var answer = 0;

    answer = checkOverlap(lines);
    return answer;
}

function checkOverlap(lines) {
    let resultArr = new Array(201);
    let result = lines.map(v => v.map(e => e + 100));
    result.forEach(v => {
        for (let i = v[0]; i < v[1]; i++) {
            resultArr[i] === undefined ? resultArr[i] = 1 : resultArr[i]++;
        }
    })


    return countLine(resultArr);
}

function countLine(arr) {
    let count = 0;
    arr.forEach(v => {
        if (v >= 2) {
            count++;
        }
    })

    return count;
}

solution(lines);