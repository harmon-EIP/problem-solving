// ["O.X", ".O.", "..X"]	1
// ["OOO", "...", "XXX"]	0
// ["...", ".X.", "..."]	0
// ["...", "...", "..."]	1
// 1가능한 경우의 수, 0 불가능한 경우의 수

// var board = ["O.X", ".O.", "..X"]; // 1
// var board = ["OOO", "...", "XXX"]; // 0
// var board = ["...", ".X.", "..."]; // 0
// var board = ["...", "...", "..."]; // 1
// var board = ["...", ".O.", "..."]; // 1
// var board = ["OX.", "OX.", "O.."]; // 1
// var board = ["OO.", "OO.", "OOO"]; // 0
// var board = ["XXX", "XXX", "XXX"]; // 0
// var board = ["OOO", "OOO", "OOO"]; // 0
// var board = ["XOO", ".X.", "OOX"]; // 1
// var board = ["OOO", "OXX", "OXX"]; // 1
var board = ["OOO", "OXX", ".XX"]; // 1


function solution(board) {
    var answer = 1;
    var countX = 0;
    var countO = 0;
    var countXset = 0;
    var countOset = 0;

    for (let element of board) {
        for (let v of element) {
            if (v === 'X') countX++;
            else if (v === 'O') countO++;
        }
    }

    // X와 O의 개수: X의 개수가 더 많으면 0
    if (countX > countO) return answer = 0;
    else if (countO - countX > 1) return answer = 0;

    // 3개 연속이 2개 이상이면 0
    // 가로가 2개이상
    for (let i = 0; i < board.length; i++) {
        if (board[i] === 'OOO') {
            countOset++;
        } else if (board[i] === 'XXX') {
            countXset++;
        }
    }
    if (countOset + countXset > 1) return answer = 0;

    countOset = 0;
    countXset = 0;

    // 세로가 2개이상
    for (let i = 0; i < board.length; i++) {
        let verticalO = 0;
        let verticalX = 0;
        for (let j = 0; j < 3; j++) {
            let result = board[j][i]
            if (result === 'X') {
                verticalX++;
            } else if (result === 'O') {
                verticalO++;
            }
            if (verticalX === 3) {
                countXset++;
            } else if (verticalO === 3) {
                countOset++;
            }
        }
    }
    if (countOset + countXset > 1) return answer = 0;

    return answer;
}

console.log(solution(board))

// test('there is no I in team', () => {
//     expect('team').not.toMatch(/I/);
// });

// test('but there is a "stop" in Christoph', () => {
//     expect('Christoph').toMatch(/stop/);
// });