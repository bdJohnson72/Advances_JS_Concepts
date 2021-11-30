let myNumbers = [1, 2, 3, 4, 5,]
let myLetters = ['a', 'b', 'c', 'c']

let newArray = myLetters.map((item, index, current) => {
    console.log(item)
    console.log(index)
    console.log(current)
})