logo
코딩테스트 연습
코딩 기초 트레이닝
수열과 구간 쿼리 4
도움말
컴파일 옵션
수열과 구간 쿼리 4
문제 설명
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.

각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.

위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ arr의 길이 ≤ 1,000
0 ≤ arr의 원소 ≤ 1,000,000
1 ≤ queries의 길이 ≤ 1,000
0 ≤ s ≤ e < arr의 길이
0 ≤ k ≤ 5
입출력 예
arr	queries	result
[0, 1, 2, 4, 3]	[[0, 4, 1],[0, 3, 2],[0, 3, 3]]	[3, 2, 4, 6, 4]
입출력 예 설명
입출력 예 #1

각 쿼리에 따라 arr가 다음과 같이 변합니다.
arr
[0, 1, 2, 4, 3]
[1, 2, 3, 5, 4]
[2, 2, 4, 5, 4]
[3, 2, 4, 6, 4]
따라서 [3, 2, 4, 6, 4]를 return 합니다.
※ 2023년 04월 27일 입출력 예 설명이 수정되었습니다.

solution.js
1
function solution(arr, queries) {
2
    var answer = [];
3
    return answer;
4
}
실행 결과
실행 결과가 여기에 표시됩니다.