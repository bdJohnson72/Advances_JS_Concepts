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

//We could achieve this with object.create and things would be a little cleaner IMHO

const person = {
    name: '',
    age: '',
    greet: function (){
      return  `my name is ${this.name}. I am ${this.age} years old`
    }
}

const  me = Object.create(person);
me.name = 'Brooks';
me.age = 49;
console.log(me.greet());

