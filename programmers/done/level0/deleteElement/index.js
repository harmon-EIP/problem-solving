// arr	delete_list	result
// [293, 1000, 395, 678, 94]	[94, 777, 104, 1000, 1, 12]	[293, 395, 678]
// [110, 66, 439, 785, 1]	[377, 823, 119, 43]	[110, 66, 439, 785, 1]

let arr = [293, 1000, 395, 678, 94];
let delete_list = [94, 777, 104, 1000, 1, 12];

function solution(arr, delete_list) {
    var answer = [];

    arr.forEach((v, idx) => {
        if (delete_list.includes(v)) {
            return;
        } else {
            answer.push(v);
        }
    })

    return answer;
}

solution(arr, delete_list);