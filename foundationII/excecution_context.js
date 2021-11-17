//JS Engine creates a global context. This gives you the global object and the this keyword
//In the browser the global context is Window. In Node the global object is global.
//Each function creates a new execution context and a new lexical context.

/* In JS our lexical scope is determined by where the function was defined. Not
Where is is written
 */

function printName(){
    return 'Brooks Johnson';
}

function findName() {
    return printName();
}

function sayMyName(){
    return findName();
}

console.log(sayMyName());