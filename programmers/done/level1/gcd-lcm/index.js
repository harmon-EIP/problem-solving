// n	m	return
// 3	12	[3, 12]
// 2	5	[1, 10]
let n = 5;
let m = 2;

// let n = 2;
// let m = 5;


function solution(n, m) {
    return [gcd(n, m), lcm(n, m)];
}

function gcd(a, b) { // 5, 2
    return b == 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return a * b / gcd(a, b);
}

console.log(solution(n, m));


/*
최대공약수 GCD(Greatest Common Divisor)
2개의 자연수 a, b(a > b)에 대해서 a를 b로 나눈 나머지가 r일 때, a와 b의 최대공약수는 b와 r의 최대공약수와 같다.

최소공배수 LCM (least common multiple)
a와 b의 최소공배수는 a와 b의 곱을 a와 b의 최대공약수를 나눈 것과 같다.
*/

// done 2023. 10. 25.

function gcdlcm(a, b) {
    var r;
    for (var ab = a * b; r = a % b; a = b, b = r) { }
    return [b, ab / b];
}
