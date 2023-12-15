// n	result
// 10	4
// 5	3
const n = 1000000; // 4
// const n = 5 // 3

function solution(n) {
    let answer = 0;

    let sqrt = Math.sqrt(n);
    let arr = new Array(n).fill(true);

    for (let i = 2; i <= sqrt; i++) {
        if (arr[i] === false) {
            continue
        }

        for (let k = i * i; k <= n; k += i) {
            arr[k] = false;
        }
    }

    for (let i = 2; i <= n; ++i) {
        if (arr[i] === true) {
            answer++;
        }
    }

    return answer;
}

// function solution(n) {
//     var answer = 0;
//     const s = new Set();
//     s.add(2);
//     for (let i = 1; i <= n; i += 2) {
//         s.add(i);
//     }
//     s.delete(1);
//     s.forEach((item) => {
//         if (isPrimeNumberAdvanced(item)) { // 11
//             for (let k = item; k <= n; k += item) {
//                 s.delete(k);
//                 answer++;
//                 console.log('k', k)
//             }
//         }
//     })

//     return answer;
// }

// function solution(n) {
//     var answer = 0;

//     for (let i = 1; i <= n; i++) {
//         answer += isPrimeNumberAdvanced(i) ? 1 : 0;
//     }

//     return answer;
// }

// 522 ms
function isPrimeNumber(num) {
    if (num === 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}

// Math.sqrt사용
// 88ms
function isPrimeNumberAdvanced(num) {
    if (num === 1) return false;
    if (num % 2 === 0) {
        num === 2 ? true : false;
    }
    let sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0) return false;
    }

    return true
}
// const testNumber = 6;
// console.log(isPrimeNumber(testNumber));
// const startTime = new Date();
console.time()
console.log(solution(n))
console.timeEnd();
// const endTime = new Date();

// console.log(endTime - startTime + 'ms');