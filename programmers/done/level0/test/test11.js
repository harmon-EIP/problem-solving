// 중복 없는 요소 찾아내기
// 중요도: 4
// arr은 배열입니다.

// 배열 내 유일한 요소를 찾아주는 함수 unique(arr)를 작성해보세요.

// 예시:

function unique(arr) {
    // let mySet = new Set();
    // arr.forEach(v => {
    //     mySet.add(v);
    // })
    let result = [];

    arr.forEach(v => {
        if (result.includes(v)) {
            return;
        } else {
            result.push(v);
        }
    })

    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// alert( unique(strings) ); // Hare, Krishna, :-O
console.log(unique(strings));

// 테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.