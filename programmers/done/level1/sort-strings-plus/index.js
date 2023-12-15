// strings	n	return
// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]
let strings = ["sun", "bed", "car"]; // ["u", "e", "a"]
let n = 1;
// let strings = ["abce", "abcd", "cdx"];
// let n = 2;
// let strings = ["cdx", "abce", "abcd"]
// let n = 2;

function solution(strings, n) {
    var answer = [];

    answer = strings.sort().sort((a, b) => a[n] < b[n] ? -1 : 1);

    return answer;
}

console.log(solution(strings, n));

// done 0000. 00. 00

// let oneStrings = strings.map(v => v[n]);
//     console.log('oneStrings', oneStrings);
// strings.forEach((v, idx) => {
//     strObj[v] = oneStrings[idx];
// })
// let sortObj = Object.entries(strObj)
//     .sort(([, a], [, b]) => a - b)
//     .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
// let sortObj = Object.fromEntries(
//     Object.entries(strObj).sort(([, a], [, b]) => a - b)
// );

