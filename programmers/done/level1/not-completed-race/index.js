// participant	completion	return
// ["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"

const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];
// const result = "leo";

// const participant = ["mislav", "stanko", "mislav", "ana"];
// const completion = ["stanko", "ana", "mislav"];

function solution(participant, completion) {
    const tempMap = new Map();

    participant.forEach(v => {
        if (tempMap.get(v) === undefined) {
            tempMap.set(v, 1);
        }
        else {
            tempMap.set(v, tempMap.get(v) + 1);
        }
    })

    completion.forEach(v => {
        tempMap.set(v, tempMap.get(v) - 1);
    })

    tempMap.forEach((value, key) => {
        if (value >= 1) {
            answer = key;
        }
    })

    return answer;
}

console.log(solution(participant, completion));

// 성공코드 1.
/**
var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))
*/

/**
function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}
*/