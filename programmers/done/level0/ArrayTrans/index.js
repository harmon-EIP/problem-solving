// my_string	s	e	result
// "Progra21Sremm3"	6	12	"ProgrammerS123"
// "Stanley1yelnatS"	4	10	"Stanley1yelnatS"
let my_string = 'Progra21Sremm3';
let s = 6
let e = 12

function solution(my_string, s, e) {
    var answer = '';

    let tempArr = my_string.slice(s, e + 1).split('').reverse();
    let count = 0;
    my_string = my_string.split('')

    for (s; s <= e; s++) {
        my_string[s] = tempArr[count];
        count++;
    }
    answer = my_string.join('')

    return answer;
}

console.log(solution(my_string, s, e));


