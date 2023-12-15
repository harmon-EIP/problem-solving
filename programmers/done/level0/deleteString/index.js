// my_string	indices	result
// "apporoograpemmemprs"	[1, 16, 6, 15, 0, 10, 11, 3]	"programmers"

let my_string = "apporoograpemmemprs";
let indices = [1, 16, 6, 15, 0, 10, 11, 3];

function solution(my_string, indices) {
    let arr = my_string.split('');
    indices.forEach(v => {
        delete arr[v];
    })
    return arr.join('');
}

console.log(solution(my_string, indices));