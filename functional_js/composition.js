
//Compose from left to right
// Pipe from Right to Left

const compose = (fnA, fnB) => (data) =>  fnA(fnB(data));
const pipe = (fnA, fnB) => (data)=> fnB(fnA(data))
const timesThree = (num) => num * 3;
const getAbsolute = (num) => Math.abs(num);
console.log(compose(getAbsolute, timesThree)(50)) //150
console.log(pipe(getAbsolute, timesThree)(100)) // 300