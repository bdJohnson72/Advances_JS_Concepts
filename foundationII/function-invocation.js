//gets put in memory at invocation
const canada = ()=>{
    console.log('cold');
}

//Gets put in memory at compile time
function india(){
    console.log('warm');
}

/*
Functions also create their own execution context with access the the keyword arguments.
Not available in the global execution context
 */
const addition = (num1, num2) => {
    console.log(`arguments ${JSON.stringify(arguments)}`);
    console.log(Array.from(arguments))
    return num2 + num1;
}

const addition2 = (...args) =>{
    console.log(args);
    return args.reduce((acc, curr) => {
      return acc += curr;
    },0)
}

console.log(addition2(2, 2, 2, 10));



