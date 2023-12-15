// a	b	return
// 3	5	12
// 3	3	3
// 5	3	12

let a = 3
let b = 5;

function solution(a, b) {
    var answer = 0;

    if (b <= a) {
        let temp = a;
        a = b;
        b = temp;
    }

    for (; a <= b; a++) {
        answer += a;
    }

    return answer;
}

console.log(solution(a, b));

// done 2029. 09. 25.

function adder(a, b){
    var result = 0
    //함수를 완성하세요
    return (a+b) * (Math.abs(a-b)+1) / 2;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( adder(3, 5) )

function adder(a, b, s = 0){
    for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
    return s;
  }
  