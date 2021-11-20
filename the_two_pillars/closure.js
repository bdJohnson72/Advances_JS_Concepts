//Closures are a product of lexical scope and functions being objects
//feature of the JS engine the values are on the heap not the stack

function a(){
    const grandfather = 'grandfather';
    return ()=>{
        const father = 'father';
        return ()=>{
            const son = 'son';
            console.log(`${grandfather} ${father} ${son}`)
        }
    }
}
const father = a()()();
console.log(father)

//this is a closure the variable stays in memory after the initial function is popped off the cll stack

function callMeMaybe(){
    const callMe = 'Hi I am here';
    setTimeout(()=>{
        console.log(callMe)
    }, 4000);
}

console.log('I am next')
callMeMaybe();
