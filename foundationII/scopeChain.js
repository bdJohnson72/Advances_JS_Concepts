//Functions are lexically scoped


function sayMyName(){
    const a = 'a';
    return function findName(){
        const b = 'b';
        return function printName(){
            const c = 'c';
            console.log(a);
            console.log(b);
            return 'Brooks Johnson';
        }
    }
}

console.log(sayMyName()()())

//iffe Immediately Invoked Function Expression. No global propery is created. All the properties are only
// availed inside the functions scope
()