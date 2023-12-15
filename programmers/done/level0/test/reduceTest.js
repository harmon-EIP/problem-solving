arr = [[1, 2], [3, 4], [5, 6]];

let flattened = arr.reduce((acc, cur) => {
    return acc.concat(cur);
})

console.log(arr);
console.log('flattened', flattened);