// food	result
// [1, 3, 4, 6]	"1223330333221"
// [1, 7, 1, 2]	"111303111"
// const food = [1, 3, 4, 6];
// const result = "1223330333221";
const food = [1, 7, 1, 2];
const result = "111303111";

function solution(food) {
    var answer = '';
    let leftFood = '';
    let rightFood = '';
    food = food.map(v => Math.floor(v / 2));
    food.forEach((v, idx) => {
        leftFood += idx.toString().repeat(v);
    })

    rightFood = [...leftFood].reverse().join('');

    answer = leftFood + '0' + rightFood;
    return answer;
}

console.log(solution(food));

// done 2023. 11. 06

// function solution(food) {
//     let res = '';
//     for (let i = 1; i < food.length; i++) {
//         res += String(i).repeat(Math.floor(food[i] / 2));
//     }

//     return res + '0' + [...res].reverse().join('');
// }

// function solution(food) {
//     let player1 = [];
//     let player2 = [];
//     let repeat = 0;
//     for (let i = 1; i <= food.length; i++) {
//         if (food[i] > 1) {
//             repeat = Math.floor(food[i] / 2);
//             for (let j = 0; j < repeat; j++)
//                 player1.push(i)
//             for (let k = 0; k < repeat; k++)
//                 player2.unshift(i)
//         }
//     }
//     player1.push(0);
//     player1 = player1.concat(player2);
//     return player1.join("");
// }
