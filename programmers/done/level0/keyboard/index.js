var keymap = ["AGZ", "BSSS"];
var targets = ["ASA","BGZ", "AS"];

function solution(keymap, targets) {
    var answer = [];
    targets.forEach(v => {
        // console.log(v); // ABCD
        let result = v.split('') // [ 'A', 'B', 'C', 'D']; 
        let resultNumber = 0;
        for (let i = 0; i < result.length; i++) {
            // console.log(result[i], 'check alphabet ---- '); // A
            let KeyInputNumberStack = 999;
            keymap.forEach(v => {
                // console.log('v', v); // ABACD,
                let keyInputNumber = 0;
                let duplicationCheck = false;
                // keymap[0] 내부 반복
                for (let j = 0; j < v.length; j++) {
                    // console.log('123', v[j])
                    if (result[i] == v[j] && !duplicationCheck) {
                        // console.log('in if')
                        keyInputNumber = j+1;
                        KeyInputNumberStack = keyInputNumber < KeyInputNumberStack ? keyInputNumber : KeyInputNumberStack;
                        duplicationCheck = true;
                        // console.log('keyInputNumber', keyInputNumber)
                    }
                }
                // console.log('keyinput, stack', keyInputNumber, KeyInputNumberStack);
            })
            KeyInputNumberStack = KeyInputNumberStack === 999 ? -1 : KeyInputNumberStack;
            resultNumber += KeyInputNumberStack;
        }
        // console.log('resultNumber: ', resultNumber);
        answer.push(resultNumber);
    })

    console.log(answer);
    return answer;
}

solution(keymap, targets);