const wizard = {
    name: 'Merlin',
    health: 100,
    heal(){
        this.health = 100;
        return this.health;
    },
    heal2(num1, num2){
      this.health += num1 + num2
    }
}


const archer = {
    name: 'Robin Hood',
    health: 30,
}

console.log(wizard.heal());

wizard.heal.call(archer);
console.log(archer)

const legolas =  {
    health: 30,
}

const gimli = {
    health: 75,
}

wizard.heal2.call(legolas, 10, 10);
wizard.heal2.apply(legolas, [5 , 5]);
console.log(legolas)

//use bind to store the value of this in a variable
const healDwarf = wizard.heal2.bind(gimli, 50, 50);
healDwarf()
console.log(gimli)