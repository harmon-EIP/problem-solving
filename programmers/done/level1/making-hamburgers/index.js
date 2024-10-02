// ingredient	result
// [2, 1, 1, 2, 3, 1, 2, 3, 1]	2
// [1, 3, 2, 1, 2, 1, 3, 1, 2]	0
// const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
// const ingredient = [1, 3, 2, 1, 2, 1, 3, 1, 2];
// const ingredient = [1, 1, 2, 3, 1, 1, 2, 3, 1, 2, 3, 1];
const ingredient = [2, 3, 1, 1];
const result = 2;

// 1231 빵 야채 고기 빵

function solution(ingredient) {
    let answer = 0;
    const stack = [];

    ingredient.forEach(v => {
        stack.push(v);
        let length = stack.length;

        if (stack[length - 1] === 1 &&
            stack[length - 2] === 3 &&
            stack[length - 3] === 2 &&
            stack[length - 4] === 1
        ) {
            answer++;
            stack.splice(-4);
        }
    })

    return answer;
}

console.log(solution(ingredient));

// done

/**
 * 
 * 
function solution(ingredient) {
    let count = 0;

    for (let i = 0; i < ingredient.length; i++) {
        if (ingredient.slice(i, i + 4).join('') === '1231') {
            count++;
            ingredient.splice(i, 4);
            i -= 3;
        }
    }

    return count;
}
 */