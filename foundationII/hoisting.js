console.log('1-------');

/*
variables are partially hoisted. The declaration but not the value. When the
compiler does its pass it will reserve memory for teddy and sing(). Hoisting happens in the global execution conctext.
Space is made on the heap.
 */
console.log(teddy);
console.log(sing());
//console.log(dog);
//console.log(fast);
var teddy = 'bear';
//will not work with let or const
const dog = 'cat';
let fast = 'slow'

/*
function declarations are fully hoisted
 */
function sing(){
    console.log('wango tango');
}
/*
Not hoisted. Lexically the first word is not function
 */
(function singii(){
    console.log('wango tango');
})()

/*
Function expressions are not hoisted
 */
const singIII = () => console.log('oh say can you see')

singIII()