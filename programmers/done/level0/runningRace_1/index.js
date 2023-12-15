// ["mumu", "soe", "poe", "kai", "mine"]	["kai", "kai", "mine", "mine"]	["mumu", "kai", "mine", "soe", "poe"]
players = ["mumu", "soe", "poe", "kai", "mine"]
callings = ["kai", "kai", "mine", "mine"]
result = ["mumu", "kai", "mine", "soe", "poe"]

function solution(players, callings) {
    var answer = [];
    let tempArr = [];
    tempArr = players.map((v, idx) =>
        [v, idx]
    )

    console.log(tempArr);

    callings.forEach(v => {
        tempArr.forEach((e, idx) => {
            if (e[0] === v) {
                e[1]--;
                // console.log(e, idx)
                tempArr[idx - 1][1]++;
            }
        }
        )
    })

    console.log(tempArr);

    // callings.forEach(v => {
    //     let result;
    //     result = players.findIndex(e => e == v);
    //     players.splice(result, 0, v);

    //     // players 랭크설정,
    //     // 반복 후 idx
    // })

    console.log(answer);
    return answer;
}

solution(players, callings);
