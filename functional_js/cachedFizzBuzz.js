
function fizzBuzz(){
    let cache = {};
    return function(num){
        console.log(`evualting ${num}`)
        if (isFizzBuzz(num)){
            console.log('evaluate')
            cache[num] = 'Fizz Buzz';
        }else if (isFizz(num)){
            console.log('evaluate')
            cache[num] = 'Fizz';
        }else if (isFizzBuzz(num)){
            console.log('evaluate')
            cache[num] = 'Buzz';
        }
        return cache[num];
    }
}

function isFizz(num){
    return num % 3 === 0;
}

function isBuzz(num){
    return num % 5 === 0;
}

function isFizzBuzz(num){
    return isFizz(num) && isBuzz(num);
}

const getFizzBuzz = fizzBuzz();
console.log(getFizzBuzz(10))