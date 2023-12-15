// seoul	return
// ["Jane", "Kim"]	"김서방은 1에 있다"

let seoul = ["Jane", "Kim"];

function solution(seoul) {
    return `김서방은 ${seoul.findIndex(e => e === 'Kim')}에 있다`;
}

console.log(solution(seoul));

// Done 20231010
