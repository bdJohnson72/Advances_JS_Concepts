// f(x) ==== f(f(x))

//This is not idempotent

function addTen(num){
    return num + 10;
}

console.log(addTen(10))//20
console.log(addTen(addTen(10))) //30

//This is idempotent

function getAbs(num){
    return Math.abs(num)
}

console.log(getAbs(-10))//10
console.log(getAbs(getAbs(getAbs(-10))))//10