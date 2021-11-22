function Ninja(name, weapon){
    this.name = name;
    this.weapon = weapon;
    //This works because the arrow functions are lexically scopped to the Ninja constructor
    //It would all if we did proto.... outside
    Ninja.prototype.attack =  ()=>{
        return `attack with ${this.weapon}`
    };
    Ninja.prototype.sneak = ()=>{
        return `${this.name} is sneaking`
    }
    console.log(Ninja.prototype)
}
//Using the constructor function gives us access to the the prototype property
//The new keyword changes the context of this.
//Point to the object that was just created
const toshiro = new Ninja('toshiro', 'sword')
console.log(toshiro)
console.table(toshiro)
console.log(toshiro.attack())
console.log(toshiro.sneak())
