function multiplyBy(number){

    return (num2)=> {
        return number * num2;
    }
}

multiplyByTwo = multiplyBy(2);
multiplyByFour = multiplyBy(4);
console.log(multiplyByTwo(2));
console.log(multiplyByFour(4));