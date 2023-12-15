// numlist	n	result
// [1, 2, 3, 4, 5, 6]	4	[4, 5, 3, 6, 2, 1]
// [10000,20,36,47,40,6,10,7000]	30	[36, 40, 20, 47, 10, 6, 7000, 10000]
let numlist = [1, 2, 3, 4, 5, 6];
let n = 4;
// let numlist = [10000,20,36,47,40,6,10,7000];
// let num = 30;

function solution(numlist, n) {
    let answer = numlist.sort((a, b) => {
        const [x, y] = [Math.abs(a - n), Math.abs(b - n)];
        if (x === y) return b - a;
        return x - y;
    });
    return answer;
}

console.log(solution(numlist, n));

// function solution(numlist, n) {
//     return numlist.sort((a,b) => {
//         const [aGab, bGab] = [Math.abs(a-n), Math.abs(b-n)]
//         // 거리가 같다면 더 큰 수를 우선 배치
//         if(aGab === bGab) return b-a
//         // 다르다면 거리별 오름차순 정렬
//         return aGab-bGab
//     })
// }

// function solution(numlist, n) {
//     return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
//   }
