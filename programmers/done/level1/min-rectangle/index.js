// sizes	result
// [[60, 50], [30, 70], [60, 30], [80, 40]]	4000
// [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	120
// [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	133
let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]; // 80, 70이 max 인데, 70에 해당하는 [30, 70] 을 회전하여 70, 30으로 변경가능
// let sizes = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]; // 15 * 8
// let sizes = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]; // 19 * 7

function solution(sizes) {
    var answer = 0;
    let [maxA, maxB] = [0, 0];

    // left idx 가 더 크도록 정렬
    sizes.forEach((e, idx, arr) => {
        if (e[0] < e[1]) {
            let temp = arr[idx][0]
            arr[idx][0] = arr[idx][1];
            arr[idx][1] = temp;
        }
    })

    sizes.forEach(e => {
        e[0] > maxA ? maxA = e[0] : maxA;
        e[1] > maxB ? maxB = e[1] : maxB;
    })

    answer = maxA * maxB;

    return answer;
}

console.log(solution(sizes));

// done 2023. 10. 30.

// success code 1
function solution(sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })
    return maxSize[0]*maxSize[1];
}

// success code 2
function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}


