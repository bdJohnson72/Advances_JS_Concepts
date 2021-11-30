//curry function

const multiplyThreeNumbers = (a) => (b) => (c) => a * b * c;

//curried versions
console.log(multiplyThreeNumbers(2)(4)(5));
const multiplyByTen = multiplyThreeNumbers(2)(5);
console.log(multiplyByTen(5));

//partial application on the second call provide all arguments
function multiplyThreeNums_Partial(a,b,c){
    return a * b * c;
}

const multiplybyTwo = multiplyThreeNums_Partial.bind(null, 2);
console.log(multiplybyTwo(5, 10))
