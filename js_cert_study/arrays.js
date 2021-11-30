let myArr = ['cat', 'dog']
let myArr2 = ['Lion', 'Tiger']

//Note that slice always returns a new array and splice updates existing

let newArray = myArr2.slice(0, 1)
console.log(newArray)

let myNumbers = [1, 2, 3, 4, 5,]
let myLetters = ['a', 'b', 'c', 'c']

//to join two arrays with a new array
let newArr = myLetters.concat(myNumbers);
console.log(newArray)