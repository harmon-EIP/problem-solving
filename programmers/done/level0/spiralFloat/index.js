let n = 5;

function solution(n) {
    let result = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        result[i] = new Array(n).fill(0)
    }

    let count = 0;
    let inputNumber = 1;
    let row = 0;
    let col = 0;

    for (let j = 0; j < n * 2 - 1; j++) {
        // left
        if (count % 4 === 0) {
            for (; col < n; col++) {
                if (result[row][col] !== 0) break;

                result[row][col] = inputNumber;
                inputNumber++;
            }

            row++;
            col--;
        }

        // down
        if (count % 4 === 1) {
            for (; row < n; row++) {
                if (result[row][col] !== 0) break;

                result[row][col] = inputNumber;
                inputNumber++;
            }
            row--;
            col--;
        }

        // right
        if (count % 4 === 2) {
            for (; col >= 0; col--) {
                if (result[row][col] !== 0) break;

                result[row][col] = inputNumber;
                inputNumber++;
            }
            row--;
            col++;
        }

        // up
        if (count % 4 === 3) {
            console.log('row, col', row, col)
            for (; row >= 0; row--) {
                if (result[row][col] !== 0) break;

                result[row][col] = inputNumber;
                inputNumber++;
            }
            row++;
            col++;
        }

        count++;
    }

    return result;
}

console.log(solution(n));

//      0	1	2	3
// 0	1	2	3	4
// 1	12	13	14	5
// 2	11	16	15	6
// 3	10	9	8	7



// let ans = Array.from({length:n},()=>[]);

// let rowMin = 1, rowMax = n-1;
// let colMin = 0, colMax = n-1;
// let row = col = 0;

// let dir = 'r';
// for (let i = 1; i <= n*n; i++) {
//     ans[row][col]=i;
//     if (dir === 'r') if (col === colMax) colMax--,row++,dir = 'b'; else col++;
//     else if (dir === 'l') if (col === colMin) colMin++,row--,dir = 't'; else col--;
//     else if (dir === 'b') if (row === rowMax) rowMax--, col--, dir = 'l'; else row++;
//     else if (dir === 't') if (row === rowMin) rowMin++, col++, dir = 'r'; else row--;
// }

// return ans;
