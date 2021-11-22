//To ways to create a regex

let regex1 = new RegExp("hello");

//literal uses //
let regex2 = /worlds/;

//You can use it with the regex obj  a string obj
const text = "Programming courses always start wit a hello world" +
    " Example";

function validatePhone(phoneNumber){
    const phoneExpression = /\d{10}/
    return phoneExpression.test(phoneNumber)
}

console.log(validatePhone('1234567800'))
//You can also you the exec method for more details
//console.log(regex2.exec(text));
//use the string method match gives the index like exec
console.log(text.match(regex2))

//search method -this gives us the index. Neg 1 for false like always
console.log(text.search(regex2))

//replace takes two params
//console.log(text.replace(regex1, 'Hola'))

//use split with a regex gives an array

console.log(text.split(regex1))