// n	return
// 3	"수박수"
// 4	"수박수박"

let n = 1; "수박수"
// let n = 4; "수박수박"

function solution(n) {
    let answer = '';
    let count = 0
    while (count < n) {
        answer += count % 2 === 0 ? '수' : '박';

        count++;
    }

    return answer;
}

console.log(solution(n));

// done 2023 1011

// function waterMelon(n){
//     var result = "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박"
//     //함수를 완성하세요
  
//     return result.substring(0,n);
//   }
  
//   // 실행을 위한 테스트코드입니다.
//   console.log("n이 3인 경우: "+ waterMelon(3))
//   console.log("n이 4인 경우: "+ waterMelon(4))
  