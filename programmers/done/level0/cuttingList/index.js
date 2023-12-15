// n = 1 : num_list의 0번 인덱스부터 b번 인덱스까지
// n = 2 : num_list의 a번 인덱스부터 마지막 인덱스까지
// n = 3 : num_list의 a번 인덱스부터 b번 인덱스까지
// n = 4 : num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로
// 올바르게 슬라이싱한 리스트를 return하도록 solution 함수를 완성해주세요.

// n	slicer	num_list	result
// 3	[1, 5, 2]	[1, 2, 3, 4, 5, 6, 7, 8, 9]	[2, 3, 4, 5, 6]
// 4	[1, 5, 2]	[1, 2, 3, 4, 5, 6, 7, 8, 9]	[2, 4, 6]
// slicer: [a, b, c]
let n = 4;
let slicer = [1, 5, 2];
let num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function solution(n, slicer, num_list) {
    var answer = [];
    let [a, b, c] = slicer;
    switch (n) {
        case 1:
            answer = num_list.slice(0, b + 1);
            break;
        case 2:
            answer = num_list.slice(a);
            break;
        case 3:
            answer = num_list.slice(a, b + 1);
            break;
        case 4:
            answer = num_list.slice(a, b + 1).filter((v, idx) => {
                if (idx % c === 0) {
                    return v;
                }
            });
            break;
    }
    return answer;
}

console.log(solution(n, slicer, num_list));