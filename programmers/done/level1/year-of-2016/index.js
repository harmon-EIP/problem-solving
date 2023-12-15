// a	b	result
// 5	24	"TUE"
const a = 5;
const b = 24;
const result = "TUE";

// 2016. 1. 1 -> 금요일
// 1월 -> 31
// 2월 -> 29 // 윤년
// 31, 30, 31, 30, 31, 31, 30, 31, 30, 31

function solution(a, b) {
    const monthDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const weekDay = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];

    let dayAfter = 0;
    for (let i = 0; i < a - 1; i++) {
        dayAfter += monthDay[i];
    }

    dayAfter += b - 1;
    return weekDay[dayAfter % 7];
}

console.log(solution(a, b));

// done 2023. 11. 21