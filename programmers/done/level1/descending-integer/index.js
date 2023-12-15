// n	return
// 118372	873211

let n = 118372;
// let result = 873211;

function solution(n) {
    return Number(n.toString().split('').sort((a, b) => b - a).join(''))
}

console.log(solution(n));

// //숫자가 분명히 더 빠름
// var nums =[];
// do{
//     nums.push(n%10);
//     n=Math.floor(n/10);
// } while(n>0)

// return nums.sort((a,b)=>b-a).join('')*1;