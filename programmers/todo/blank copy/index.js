// numbers	hand	result
// [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
// [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL"
const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";
const result = "LRLLLRLLRRL";

// 배열뒤집기?
function solution() {
    let arr = [];

    for (let i = 0; i < 100; i++) {
        arr[i] = i;
    }
    console.log('arr', arr);

}
solution();
