let people = [
    {name: 'Bilbo', age: 111},
    {name: 'Frodo', age: 30},
    {name: 'Sam', age: 31},
    {name: 'Merry', age: 28},
    {name: 'Pippin', age: 28},
]

console.log(people.sort((a, b) =>{
    return a.age > b.age;
}))

//sort alphabetically

console.log(people.sort((a, b) => {
  return (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0;
}))

//practice reduce
let myNumbers = [1, 2, 3, 4, 5,]
console.log(myNumbers.reduce((acc, curr) => {
    return acc += curr
}, 0))

let hobbitAges = people.reduce((acc, curr) => {
   return acc + curr.age;
},0)

console.log(hobbitAges)

const gatsby = 'The Great Gatsby';
const dune =  "Dune";
const crime = 'Crime and Punishment';
const dickens = "Great Expectations";
let favoriteBooks = [];
function addToFavorites(book){
    if (!book.toLowerCase().split(' ').includes('great')){
        favoriteBooks.push(book)
    }
}

const printFavorites = (bookArray) => {
    console.log(`There are ${bookArray.length}`)
    for (let book of bookArray){
        console.log(book)
    }
}

addToFavorites(gatsby)
addToFavorites(dune)
addToFavorites(dickens);
addToFavorites(crime)
printFavorites(favoriteBooks)


