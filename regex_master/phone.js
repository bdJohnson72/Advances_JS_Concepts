const numbers = /[^0-9]/g;
let name = '123br'

console.log(numbers.test(name))
name = name.replace(numbers, '')
console.log(name)
