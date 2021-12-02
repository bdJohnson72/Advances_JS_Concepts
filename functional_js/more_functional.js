//example of using functional vs OO for the characters

function Character(name, race, characterClass){
    let character = {
        name,
        race,
        characterClass
    }
    return getAttack(character)
}

function getAttack(character){
    return Object.assign({}, character, {attack(){return `${this.name} is attacking`}})
}

let gimli = new Character('Gimli', 'dwarf', 'warrior');
console.log(gimli)
console.log(gimli.attack())



