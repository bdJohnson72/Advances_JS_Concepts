/*
This is the object that the function is a property of
What ever is to the left of the dot
 */

const person = {
    name:  'Billy',
    speak() {
        return `hi I am ${this.name}`
    }
}
console.log(person.speak());

const obj = {
    name: 'Billy',
    callIt() {
        console.log('a', this);
        var anotherFunc = function (){
            console.log('b', this)
        }
        //this will refer to Node global object.
        anotherFunc();
    }
}

const obj2 = {
    name: 'Billy',
    callIt() {
        console.log('a', this);
        //arrow functions are lexically scoped
        const anotherFunc =  () => {
            console.log('b', this)
        }
        anotherFunc();
    }
}

const obj3 = {
    name: 'Billy',
    callIt() {
        console.log('a', this);
        const that = this;
        var anotherFunc = function (){
            console.log('b', that)
        }
        //this will refer to Node global object.
        anotherFunc();
    }
}

obj.callIt();
obj2.callIt();
obj3.callIt();