// array	commands	return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function solution(array, commands) {
    var answer = [];

    commands.forEach(e => {
        let sliceArr = array
            .slice(e[0] - 1, e[1])
            .sort((a, b) => a - b);
        answer.push(sliceArr[e[2] - 1]);
    })

    return answer;
}

console.log(solution(array, commands));

// done 2023. 11. 02

// success code 1
// function solution(array, commands) {
//     return commands.map(command => {
//         const [sPosition, ePosition, position] = command
//         const newArray = array
//             .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
//             .sort((a,b) => a - b)    

//         return newArray[position - 1]
//     })
// }
