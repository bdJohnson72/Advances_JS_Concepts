//factory functions

function createElf(name, weapon){
    return {
        name,
        weapon,
        attack(){
            return `attack with ${this.weapon}`
        }
    }
}

function createNinja(name, weapon){
    return {
        name,
        weapon,
    }
}

//Not memory efficient. If we had 1000 elves this would create 1000 attack functions in memory
//You could lift specific functions to their own function store

const ninjaFunctions = {
    attack(){
        return `attack with ${this.weapon}`
    },
    sneak(){
        return `${this.name} is sneaking`
    }
}
const ninja = createElf('Sam', 'Sword');
console.log(ninja.attack())

const toshiro = createNinja('Toshiro', 'Throwing Stars');
toshiro.attack = ninjaFunctions.attack;
toshiro.sneak = ninjaFunctions.sneak;

console.log(toshiro.attack())
console.log(toshiro.sneak())

//Note that we can also achieve this with Object.create

function createNinja2(name, weapon){
    const newNinja = Object.create(ninjaFunctions);
    console.log(newNinja.__proto__)
    newNinja.name = name;
    newNinja.weapon = weapon;
    return newNinja
}

const bruce = createNinja2('bruce', 'bo-staff');
console.log(bruce.attack())
console.log(bruce.sneak())