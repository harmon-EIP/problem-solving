logo
코딩테스트 연습
코딩 기초 트레이닝
문자열 잘라서 정렬하기
도움말
컴파일 옵션
문자열 잘라서 정렬하기
문제 설명
문자열 myString이 주어집니다. "x"를 기준으로 해당 문자열을 잘라내 배열을 만든 후 사전순으로 정렬한 배열을 return 하는 solution 함수를 완성해 주세요.

단, 빈 문자열은 반환할 배열에 넣지 않습니다.

제한사항
1 ≤ myString ≤ 100,000
myString은 알파벳 소문자로 이루어진 문자열입니다.
입출력 예
myString	result
"axbxcxdx"	["a","b","c","d"]
"dxccxbbbxaaaa"	["aaaa","bbb","cc","d"]
입출력 예 설명
입출력 예 #1

myString을 "x"를 기준으로 자른 배열은 ["a","b","c","d"]이며, 이 배열은 이미 사전순으로 정렬된 상태입니다. 따라서 해당 배열을 return 합니다.
입출력 예 #2

myString을 "x"를 기준으로 자른 배열은 ["d","cc","bbb","aaaa"]이며, 이 배열을 사전순으로 정렬하면 ["aaaa","bbb","cc","d"]입니다. 따라서 해당 배열을 return 합니다.
solution.js
a
1
function solution(myString) {
2
    return answer = myString.split('x').sort((a, b) => b - a)
3
}
실행 결과
테스트 1
입력값 〉	"axbxcxdx"
기댓값 〉	["a", "b", "c", "d"]
실행 결과 〉	실행한 결괏값 ["a","b","c","d",""]이 기댓값 ["a","b","c","d"]과 다릅니다.
테스트 2
입력값 〉	"dxccxbbbxaaaa"
기댓값 〉	["aaaa", "bbb", "cc", "d"]
실행 결과 〉	실행한 결괏값 ["d","cc","bbb","aaaa"]이 기댓값 ["aaaa","bbb","cc","d"]과 다릅니다.
테스트 결과 (~˘▾˘)~
2개 중 0개 성공