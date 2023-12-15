// [2021, 12, 28]	[2021, 12, 29]	1
// let date1 = [2021, 12, 28];
// let date2 = [2021, 12, 29];

// [1024, 10, 24]	[1024, 10, 24]  0
let date1 = [1024, 10, 24];
let date2 = [1024, 10, 24];

function solution(date1, date2) {
    let [year1, month1, day1] = date1;
    let [year2, month2, day2] = date2;
    let format1 = new Date(year1 + '-' + month1 + '-' + day1);
    let format2 = new Date(year2 + '-' + month2 + '-' + day2);

    return format1 < format2 ? 1 : 0;
}

console.log(solution(date1, date2)); 