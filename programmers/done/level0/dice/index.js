// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.

// a	b	c	d	result
// 2	2	2	2	2222
// 4	1	4	4	1681
// 6	3	3	6	27
// 2	5	2	6	30
// 6	4	2	5	2
let a = 6;
let b = 4;
let c = 2;
let d = 5;

function solution(a, b, c, d) {
    let answer = 0;
    let testSet = new Set();
    let arr = [a, b, c, d].sort((a, b) => a - b);
    arr.forEach(v => testSet.add(v));
    let size = testSet.size;

    switch (size) {
        case 1: // same
            answer = 1111 * a;
            break;
        case 2: // 2, 2
            if (arr[0] === arr[1] && arr[2] === arr[3]) { // 2, 2
                let [p, q] = [arr[0], arr[2]]
                answer = (p + q) * Math.abs(p - q);
            } else { // 1, 3 or 3, 1
                console.log('test case')
                let p = arr[0] === arr[1] ? arr[0] : arr[3];
                let q = arr[0] === arr[1] ? arr[3] : arr[0];
                answer = (10 * p + q) * (10 * p + q);
            }
            break;
        case 3: // 1, 1 ,2
            if (arr[0] === arr[1]) {
                answer = arr[2] * arr[3]
            } else if (arr[1] === arr[2]) {
                answer = arr[3] * arr[0]
            } else {
                answer = arr[0] * arr[1];
            }
            break;
        case 4: // 1, 1, 1, 1
            answer = arr[0];
            break;
    }

    return answer;
}

console.log(solution(a, b, c, d));