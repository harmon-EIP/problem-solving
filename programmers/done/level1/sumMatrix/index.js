// arr1	arr2	return
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
// [[1],[2]]	[[3],[4]]	[[4],[6]]
let arr1 = [[1, 2], [2, 3]];
let arr2 = [[3, 4], [5, 6]];

function solution(arr1, arr2) {
    var answer = arr1;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            answer[i][j] += arr2[i][j]
        }
    }

    return answer;
}

console.log(solution(arr1, arr2));

// done 20231025

function sumMatrix(A,B){
    return A.map((arr1, idx1) => arr1.map((val, idx2) => val+B[idx1][idx2]));
}
