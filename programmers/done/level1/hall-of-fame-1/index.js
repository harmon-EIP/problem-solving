// k	score	result
// 3	[10, 100, 20, 150, 1, 100, 200]	[10, 10, 10, 20, 20, 100, 100]
// 4	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]	[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
// let k = 3;
// let score = [10, 100, 20, 150, 1, 100, 200];
// let result = [10, 10, 10, 20, 20, 100, 100];
let k = 4;
let score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

function solution(k, score) {
    var answer = [];
    for (let day = 1; day <= score.length; day++) {
        let hallOfFame = score // 명예의전당
            .slice(0, day)
            .sort((a, b) => b - a)
            .slice(0, k);

        answer.push(hallOfFame[hallOfFame.length - 1]);
    }

    return answer;
}

console.time('start')
console.log(solution(k, score));
console.timeEnd('start')

// done 2023. 11. 17

// success code
function solution(k, score) {
    const stack = []
    return score.reduce((a,c) => {
        if(stack.length < k) {
            stack.push(c)
            stack.sort((a,b) => a - b)
        }
        else {
            stack.push(c)
            stack.sort((a,b) => a - b)
            stack.shift()
        }
        a.push(stack[0])
        return a
    },[])
}
