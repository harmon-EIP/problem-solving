// my_string	queries	result
// "rermgorpsam"	[[2, 3], [0, 7], [5, 9], [6, 10]]	"programmers"

let my_string = "rermgorpsam";
let queries = [[2, 3], [0, 7], [5, 9], [6, 10]];

function solution(my_string, queries) {
    var answer = '';
    queries.forEach(v => {
        let startIndex = v[0];
        let endIndex = v[1];
        let temp = my_string.split('').slice(startIndex, endIndex + 1).reverse().join('');
        my_string_1 = my_string.split('').splice(0, startIndex).join('');
        my_string_2 = my_string.split('').splice(endIndex + 1).join('');

        my_string = my_string_1 + temp + my_string_2
    })
    answer = my_string;
    return answer;
}

function solution(my_string, queries) {
    let str = my_string.split('');
    queries.forEach(([start, end]) => {
        const changeStr = str.slice(start, end + 1);
        str.splice(start, changeStr.length, ...changeStr.reverse());
    });
    return str.join('');
}


console.log(solution(my_string, queries));
