//Pure functions do not rely on external information and will always return the same output given the same input
// produces no side effects

/*
A dead giveaway that a function is impure
is if it makes sense to call it without using its
return value. For pure functions, that’s a noop.
*/

//this is a pure function
function addTwo(number){
    return number += 2;
}


//Not a pure function it relies on external data
let currentNum = 2;

function notPure(){
    return currentNum + 2;
}