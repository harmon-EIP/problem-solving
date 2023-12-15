// arr	result
// [1, 2, 3, 4, 5, 6]	[1, 2, 3, 4, 5, 6, 0, 0]
// [58, 172, 746, 89]	[58, 172, 746, 89]
let arr = [58, 172, 746, 89];

function solution(arr) {
    let involution = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
    let length = arr.length;
    let count = 0;
    involution.forEach(v => {
        if (v < length && count <= 0) {
            let temp = v * 2 - length;
            let newArr = (new Array(temp)).fill(0)
            arr.push(...newArr);
            count++;
        }
    })

    return arr;
}

console.log('answer:', solution(arr));