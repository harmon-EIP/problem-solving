process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    for (let i = 0; i < b; i++) {
        for (let j = 0; j < a; j++) {
            process.stdout.write('*');
        }
        console.log('')
    }
});

// done 2023. 10. 25.

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     const row = '*'.repeat(a)
//     for(let i =0; i < b; i++){
//         console.log(row)
//     }

// });
/*
    repeat 함수 사용하면 for 문 줄이기 가능
*/