unction solution(n) {
    var answer = 0;

    for (let i = 1; i <= n; i++) {
        answer += isPrimeNumberAdvanced(i) ? 1 : 0;
    }

    return answer;
}