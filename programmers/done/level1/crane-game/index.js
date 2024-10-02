// 입출력 예
// board	moves	result
// [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]	[1,5,3,5,1,2,1,4]	4
const board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
// const board = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
// const moves = [1, 2, 3, 4, 5];
const result = 4;

/**
[0, 0, 0, 0, 0]
[0, 0, 1/, 0, 3/]
[0, 2/, 5, 0, 1/]
[4/, 2, 4, 4, 2]
[3/, 5, 1, 3, 1]
**/

/**
[ 4/1, 3/5 /7 ], 
[ 2/6, 2, 5 ], 
[ 1/3, 5, 4, 1 ], 
[ 4/8, 3 ], 
[ 3/2, 1/4, 2, 1 ] ] 
 */

// 15351214
// 4 3 1 1 3 2 unde 4

// solution.js
function solution(board, moves) {
    let answer = 0;
    let stack = [];
    let output = [];

    output = board[0].map((_, colIndex) => board.map(row => row[colIndex]).filter(x => x !== 0));

    for (let i = 0; i < moves.length; i++) {
        let temp = output[moves[i] - 1].shift()
        if (temp !== undefined) {
            stack.push(temp);
        }

        if (stack.length >= 2 && stack[stack.length - 1] === stack[stack.length - 2]) {
            stack.splice(-2, 2);
            answer += 2;
        }
    }

    return answer;
}

console.log(solution(board, moves))

// done 2024. 07. 10