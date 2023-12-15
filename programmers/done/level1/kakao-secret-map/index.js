// 매개변수	값
// n	5
// arr1	[9, 20, 28, 18, 11]
// arr2	[30, 1, 21, 17, 28]
// 출력	["#####","# # #", "### #", "# ##", "#####"]
// 매개변수	값
// n	6
// arr1	[46, 33, 33 ,22, 31, 50]
// arr2	[27 ,56, 19, 14, 14, 10]
// 출력	["######", "### #", "## ##", " #### ", " #####", "### # "]
// let n = 5;
// let arr1 = [9, 20, 28, 18, 11];
// let arr2 = [30, 1, 21, 17, 28];
let n = 6;
let arr1 = [46, 33, 33, 22, 31, 50];
let arr2 = [27, 56, 19, 14, 14, 10];

function solution(n, arr1, arr2) {
    var answer = [];

    arr1toDec = arr1.map(v => v.toString(2));
    arr2toDec = arr2.map(v => v.toString(2));

    arr1toDec = arr1toDec.map(v => {
        let result = v.split('');
        for (let i = v.length; i < n; i++) {
            result.unshift('0');
        }
        return result;
    })

    arr2toDec = arr2toDec.map(v => {
        let result = v.split('');
        for (let i = v.length; i < n; i++) {
            result.unshift('0');
        }
        return result;
    })

    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            answer.push(!!+arr1toDec[j][k] || !!+arr2toDec[j][k] ? '#' : ' ')
        }
    }

    let test = [];

    for (let i = 0; i < n; i++) {
        test.push(answer.splice(0, n));
    }


    test.forEach(v => {
        answer.push(v.join(''));
    });

    return answer;
}

console.log(solution(n, arr1, arr2));

// done 2023. 11. 06

// function solution(n, arr1, arr2) {
//     return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
// }

// const addZero = (n, s) => {
//     return '0'.repeat(n - s.length) + s;
// }

// function solution(n, arr1, arr2) {
//     let num1, num2, s;
//     let answer = [];
//     //manually turning decimals to binaries cos i can!
//     for (let i=0; i<n; i++){
//         num1 = arr1[i];
//         num2 = arr2[i];
//         s = '';
//         for (let j=0; j<n; j++){
//             s = (num1%2 + num2%2) ? '#'+s : ' '+s;
//             num1 = Math.floor(num1/2);
//             num2 = Math.floor(num2/2);
//         }
//         answer.push(s);
//     }    
//     return answer;
// }

