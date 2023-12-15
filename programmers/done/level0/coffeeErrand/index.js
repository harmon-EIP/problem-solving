// order의 원소	의미
// "iceamericano", "americanoice"	차가운 아메리카노
// "hotamericano", "americanohot"	따뜻한 아메리카노
// "icecafelatte", "cafelatteice"	차가운 카페 라테
// "hotcafelatte", "cafelattehot"	따뜻한 카페 라테
// "americano"	아메리카노
// "cafelatte"	카페 라테
// "anything"	아무거나

// 아메리카노: 4,500원
// 카페 라테: 5,000원
// order	result
// ["cafelatte", "americanoice", "hotcafelatte", "anything"]	19000
// ["americanoice", "americano", "iceamericano"]	13500

let order = ["cafelatte", "americanoice", "hotcafelatte", "anything"];
// let order = ["americanoice", "americano", "iceamericano"];

function solution(order) {
    var answer = 0;
    order.forEach(v => {
        v.includes('americano') ? answer += 4500 :
            v.includes('cafelatte') ? answer += 5000 :
                v.includes('anything') ? answer += 4500 : answer
    })

    // const solution = (order) => order.reduce((acc, cur) => acc + (cur.includes('latte') ? 5000 : 4500), 0)

    return answer;
}

console.log(solution(order));

