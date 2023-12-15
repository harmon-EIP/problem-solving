// nums	result
// [3,1,2,3]	2
// [3,3,3,2,2,4]	3
// [3,3,3,2,2,2]	2

// const nums = [3, 1, 2, 3];
// const nums = [3, 3, 3, 2, 2, 4];
const nums = [3, 3, 3, 2, 2, 2];
const result = 2;

function solution(nums) {
    return [...new Set(nums)].length > nums.length / 2 ? nums.length / 2 : [...new Set(nums)].length;
}

console.log(solution(nums));

// done 2023. 11. 21

// answer 1
// function solution(nums) {
//     let answer = 0;
//     const select = nums.length/2;
//     const check = nums.reduce((total,cur) => {
//         total[cur] ? total[cur]++ : total[cur] = 1;
//         return total;
//     },{});
//     const checkLeng = Object.keys(check).length;
//     return checkLeng > select ? select : checkLeng;
// }
