// nums	result
// [1,2,3,4]	1
// [1,2,7,6,4]	4

// let nums = [1, 2, 3, 4];
let nums = [1, 2, 7, 6, 4];

function solution(nums) {
    var answer = 0;

    nums = nums.sort();

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                answer += checkPrimeNumber(sum) ? 1 : 0;
            }
        }
    }

    return answer;
}

// 소수 체크
function checkPrimeNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(solution(nums));

let num = 5;
console.log(checkPrimeNumber(num))

// done 2023. 12. 04