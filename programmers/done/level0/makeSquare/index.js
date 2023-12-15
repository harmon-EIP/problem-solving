// [[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]]	[[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]
// [[57, 192, 534, 2], [9, 345, 192, 999]]	[[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]]
// [[1, 2], [3, 4]]	[[1, 2], [3, 4]]

// let arr = [[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]];
let arr = [[57, 192, 534, 2], [9, 345, 192, 999]];
let result = [[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]];

function solution(arr) {
    var answer = [[]];
    let row = arr[0]?.length;
    let col = arr.length;

    if (row === col) {
        return arr;
    } else if (col > row) {
        arr.forEach(v => {
            v.length = col;
            v.fill(0, row, col);
        })
    } else if (row > col) {
        let count = col;
        while (row > count) {
            arr.push(new Array(row).fill(0));

            count++;
        }
    }
    return arr;
}

console.log(solution(arr));

function solution(arr) {
    const [row, col] = [arr.length, arr[0].length];
    if (row === col) {
      return arr;
    }
    if (row < col) {
      return [...arr, ...new Array(col - row).fill().map(() => new Array(col).fill(0))];
    }
    return arr.map((r) => [...r, ...new Array(row - col).fill(0)]);
  }
  
  