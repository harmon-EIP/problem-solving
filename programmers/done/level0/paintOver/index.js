// test('the data is peanut butter', done => {
//     function callback(data) {
//         try {
//             expect(data).toBe('peanut butter');
//             done();
//         } catch (error) {
//             done(error);
//         }
//     }

//     fetchData(callback);
// });

// 1.
// let n = 8
// let m = 4
// let section = [2, 3, 6]

// 2.
// let n = 5
// let m = 4
// let section = [1, 3]

// 3.
let n = 4
let m = 1
let section = [1, 2, 3, 4]

function solution(n, m, section) {
    var checker = 0;
    var answer = 0;
    section.forEach((v) => {
        console.log(v);
        if (checker <= v) {
            checker = v + m;
            console.log('checker: ', checker);
            answer++;
        }
    })

    console.log(answer);
    return answer;
}

solution(n, m, section);

// n	m	section	result
// 8	4	[2, 3, 6]	2
// 5	4	[1, 3]	1
// 4	1	[1, 2, 3, 4]	4

// test('there is no I in team', () => {
//     expect('team').not.toMatch(/I/);
// });

// test('but there is a "stop" in Christoph', () => {
//     expect('Christoph').toMatch(/stop/);
// });


function solution(n, m, section) {
    var checker = 0;
    var check = 0;
    for (let i=0; i<section.length; i++) {
        if(section[i] > check) {
            check = m + section[i]-1            
            checker++;
        }
    }
    
    return checker;
}