//three wways to create an object

//1. object literal

let brooks = {
    name: 'Brooks',
    age: 49,
    "middle name": "Dwight"
}

//object constructor
let brooks2 = new Object();
brooks2.name = 'Brooks'
console.log(brooks2)

//Use object.create()

let newObj = Object.create(brooks2);
console.log(newObj.name)

//To get keys from an object
console.log(Object.keys(brooks))

//To delete a property
delete brooks["middle name"]
console.log(brooks)

