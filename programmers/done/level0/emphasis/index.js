// "abstract algebra"	"AbstrAct AlgebrA"
let myString = "abstract algebra";

function solution(myString) {
    var answer = '';
    answer = myString.split('').map(v => {
        if (v === 'a' || v === 'A') {
            return v.toUpperCase();
        } else {
            return v.toLowerCase();
        }
    })
    return answer.join('');
}

solution(myString)