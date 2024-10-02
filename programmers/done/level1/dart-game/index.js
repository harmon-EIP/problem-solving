const dartResult = '1D2S3T*';

function solution(dartResult) {
    var answer = 0;
    let num = 0;
    let numArr = [];

    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult[i])) {
            num = +dartResult[i - 1] == 1 ? 10 : +dartResult[i];
        } else {
            switch (dartResult[i]) {
                // S, D, T
                case 'S':
                    numArr.push(num);
                    break;
                case 'D':
                    numArr.push(Math.pow(num, 2));
                    break;
                case 'T':
                    numArr.push(Math.pow(num, 3));
                    break;
                // *, #
                case '*':
                    if (numArr.length - 2 >= 0) { // 2개 이상일 때
                        numArr[numArr.length - 2] *= 2;
                    }
                    numArr[numArr.length - 1] *= 2;
                    break;
                case '#':
                    numArr[numArr.length - 1] *= -1;
                    break;
            }
        }
    }

    answer = numArr.reduce((acc, cur) => acc += cur);

    return answer;
}

console.log(solution(dartResult));
// 2 + 8 + 9

// let dart = dartResult.match(/\d.?\D/g);