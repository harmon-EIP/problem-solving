// arr	answer
// [1,1,3,3,0,1,1]	[1,3,0,1]
// [4,4,4,3,3]	[4,3]

let arr = [1, 1, 3, 3, 0, 1, 1];
// let arr = [4, 4, 4, 3, 3];

function solution(arr) {
    let answer = [];
    let check;

    answer = arr.filter((v, idx) => {
        if (check === v) {
            return false;
        } else {
            check = v;
            return true;
        }
    });

    return answer;
}

// short code
// function solution(arr) {
//     return arr.filter((v, idx) => v != arr[idx + 1]);
// }

console.log(solution(arr));

// done 2023. 10. 25.

// success code 1
// function solution(arr)
// {
//     return arr.filter((val,index) => val != arr[index+1]);
// }

// success code 2
// function solution(arr) {
//     var answer = [arr[0]];

//     for (let i=1; i<arr.length; i++) {
//         if (answer[answer.length - 1] !== arr[i]) {
//             answer.push(arr[i]);
//         }
//     }

//     return answer;
// }

// success code 3
// let solution=_=>_.filter((i,$)=>i!=_[--$])
