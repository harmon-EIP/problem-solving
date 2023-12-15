// todo_list	finished	result
// ["problemsolving", "practiceguitar", "swim", "studygraph"]	[true, false, true, false]	["practiceguitar", "studygraph"]

let todo_list = ["problemsolving", "practiceguitar", "swim", "studygraph"];
let finished = [true, false, true, false];


// function solution(todo_list, finished) {
//     var answer = [];

//     finished.forEach((v, idx) => {
//         if (v === false) {
//             let result = todo_list[idx];
//             answer.push(result);
//         }
//     })

//     return answer;
// }

function solution(todo_list, finished) {
    var answer = [];

    let result = todo_list.filter((_, i) => !finished[i]);

    return answer;
}

solution(todo_list, finished)










return todo_list.filter((e, i) => !finished[i]);

