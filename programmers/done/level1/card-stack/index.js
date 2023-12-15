// cards1	cards2	goal	result
// ["i", "drink", "water"]	["want", "to"]	["i", "want", "to", "drink", "water"]	"Yes"
// ["i", "water", "drink"]	["want", "to"]	["i", "want", "to", "drink", "water"]	"No"

// let cards1 = ["i", "drink", "water"];
// let cards2 = ["want", "to"];
// let goal = ["i", "want", "to", "drink", "water"];
let cards1 = ["i", "water", "drink"];
let cards2 = ["want", "to"];
let goal = ["i", "want", "to", "drink", "water"];

// let cards1 = ["hello"];
// let cards2 = ["i"];
// let goal = ["i"];

// 입력값 〉 ["a", "b", "c"], ["d", "e", "f"], ["a", "d", "f"]
// 기댓값 〉 "No"
// let cards1 = ["a", "b", "c"];
// let cards2 = ["d", "e", "f"];
// let goal = ["a", "d", "f"];


function solution(cards1, cards2, goal) {
    let makeArr = [];

    goal.forEach(e => {
        if (cards1[0] === e) {
            makeArr.push(cards1[0])
            cards1.shift();
        } else if (cards2[0] === e) {
            makeArr.push(cards2[0])
            cards2.shift();
        } else {
            return 'No'
        }
    })

    return makeArr.join(' ') === goal.join(' ') ? 'Yes' : 'No';
}

console.time('checkTime');
console.log(solution(cards1, cards2, goal));
console.timeEnd('checkTime');

// done 2023. 11. 21