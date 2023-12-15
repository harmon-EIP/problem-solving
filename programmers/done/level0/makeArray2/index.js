// l	r	result
// 5	555	[5, 50, 55, 500, 505, 550, 555]
// 10	20	[-1]
let l = 5;
let r = 555;

function solution(l, r) {
    var answer = [];

    for (let i = l; i <= r; i++) {
        let result = i.toString();
        let count = 0;

        result.split('').forEach(v => {
            if (v === '5' || v === '0') {
                count++;
            }
            if (count === result.length) {
                answer.push(parseInt(result));
            }
        })
    }

    return answer.length === 0 ? [-1] : answer;
}

console.log(solution(l, r));

// 20230915

// import java.util.*;

// class Solution {
//     public int[] solution(int l, int r) {
//         List<Integer> list = new ArrayList<>();
//         for(int i = l; i<=r; i++) {
//             String str = i + "";
//             int count = 0;
//             for(int j = 0; j < str.length(); j++) {
//                 if(str.charAt(j) == 48 || str.charAt(j) == 53) {
//                     count ++;
//                 }
//             }
//             if(count == str.length()) {
//                 list.add(i);
//             }
//         }
//         int[] answer = list.stream().mapToInt(i->i).toArray();
//         int[] empty = {-1};
//         if(answer.length == 0) return empty;
//         return answer;
//     }
// }

function solution(l, r) {
    const result = Array.from({ length: r - l + 1 }, (_, i) => i + l).filter(n => !/[^05]/.test(n));
    return result.length ? result : [-1];
}
