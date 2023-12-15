// [[80, 70], [90, 50], [40, 70], [50, 80]]	[1, 2, 4, 3]
// [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]	[4, 4, 6, 2, 2, 1, 7]


// var score = [[80, 70], [90, 50], [40, 70], [50, 80]];
var score = [[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]];

// function solution(score) {
//     var answer = [];
//     let averageTemp = average(score);
//     let averageResult = averageTemp.slice();
//     let ascending = averageResult.sort((a, b) => b - a);

//     let rankingResult = ranking(ascending);
//     let mergeResult = mergeArr(ascending, rankingResult);

//     averageTemp.forEach(element => {
//         mergeResult.forEach(v => {
//             if (element == v[0]) {
//                 answer.push(v[1]);
//             }
//         })
//     })

//     return answer;
// }

// function average(arr) {
//     return arr.map(v => (v[0] + v[1]) / 2);
// }

// function ranking(arr) {
//     let result = [];
//     let temp = 101;
//     let point = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (temp > arr[i]) {
//             temp = arr[i];
//             point = i + 1;
//         }
//         if (temp === arr[i]) {
//             result.push(point)
//         } else {
//             result.push(i + 1);
//         }
//     }

//     return result;
// }

// function mergeArr(arr, rank) {
//     let result = arr.map((v, idx) => [v, rank[idx]]);
//     const set = new Set(result)
//     const arr2 = [...set];

//     let uniqueArr = [...new Set(arr2.join('|').split('|'))];
//     uniqueArr = uniqueArr.map(v => v.split(',')).map(v => v.map(a => +a));
//     return uniqueArr;
// }

// function solution(score) {
//     return score.map((el) => {
//         return (
//             score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
//         );
//     });
// }

// function solution(score) {
//     let result = score.map((el) => {
//         // return ((el[0] + el[1]) / 2);
//         return (
//             score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2)
//         );
//     });

//     console.log('result: ', result)
// }

function solution(score) {
    return score.map((el) => {
        return (
            score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2)
        );
    });
}

let result = solution(score);
console.log(result);

