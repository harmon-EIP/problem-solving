logo
코딩테스트 연습
연습문제
직사각형 별찍기
도움말
컴파일 옵션
직사각형 별찍기
문제 설명
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

제한 조건
n과 m은 각각 1000 이하인 자연수입니다.
예시
입력

5 3
출력

*****
*****
*****
solution.js
1
process.stdin.setEncoding('utf8');
2
process.stdin.on('data', data => {
3
    const n = data.split(" ");
4
    const a = Number(n[0]), b = Number(n[1]);
5
    console.log(a);
6
    console.log(b);
7
});
실행 결과
코드를 초기화하였습니다.