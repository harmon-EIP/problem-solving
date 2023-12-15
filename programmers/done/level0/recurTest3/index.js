

function sumTo1(num) {
    if (num === 1) { return num }
    else {
        return num + sumTo1(num - 1)
    }
}

console.log(sumTo1(5));

function factorial(num) {
    
}