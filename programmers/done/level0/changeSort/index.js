// num_list	n	result
// [2, 1, 6]	1	[1, 6, 2]
// [5, 2, 1, 7, 5]	3	[7, 5, 5, 2, 1]
let num_list = [5, 2, 1, 7, 5];
let n = 3

function solution(num_list, n) {
    var answer = [];

    let frontArr = num_list.slice(n);
    let rearArr = num_list.slice(0, n);

    answer = frontArr.concat(rearArr);

    return answer;
}

solution(num_list, n)