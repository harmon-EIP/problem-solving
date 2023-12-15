// 나이를 기준으로 객체 정렬하기
// 중요도: 5
// 프로퍼티 age가 있는 객체가 담긴 배열이 있습니다. 이 배열을 age를 기준으로 정렬해주는 함수 sortByAge(users)를 만들어보세요.

// 예시:

function sortByAge(arr) {
    arr.sort((a, b) => (
        a.age - b.age
    ))
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);



console.log(arr);

// now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete