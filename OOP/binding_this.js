//new binds this to the newly created object

function Dog(name){
    this.name = name;

    Dog.prototype.bark = ()=>{
        console.log(`${this.name} is barking`)
    }
}

const ino = new Dog('ino');
ino.bark();

//implicit binding
const dog = {
    name: '',
    bark(){
        console.log(`${this.name} is barking`)
    }
}

//explicit binding uses bind  call or apply
