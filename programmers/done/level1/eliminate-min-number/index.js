// arr	return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]
// [3, 4, 5, 1, 2] [3, 4, 5, 2]
// let arr = [4, 3, 2, 1]; // [4,3,2]
// let arr = [10]; // [-1]
let arr = [3, 4, 5, 1, 2, 6, 7, 8];

function solution(arr) {
    let tempArr = JSON.parse(JSON.stringify(arr));
    let sortArr = tempArr.sort((a, b) => a - b);
    let minNum = sortArr[0];
    let index = arr.indexOf(minNum);

    arr.splice(index, 1);

    return arr.length === 0 ? [-1] : arr;
}

console.log(solution(arr));

// Done 20231011

// function solution(arr) {
//     arr.splice(arr.indexOf(Math.min(...arr)),1);
//     if(arr.length<1)return[-1];
//     return arr;
// }

// Math.min(...arr);
// Math.min.apply(Math, arr);
// a=Math.min.apply(null,arr);
