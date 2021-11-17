//function currying -note seems like a closure
function multiply(a, b){
    return a * b;
}

let times3 = multiply.bind(null, 3);
const time4 = multiply.bind(null, 4);
console.log(times3(3));
console.log(times3(100))
console.log(time4(5))


const multi = (num1) =>{
    return function (num2){
        return num1 * num2;
    }
}

const timesTwo = multi(2);
console.log(timesTwo(2));
console.log(timesTwo(50));