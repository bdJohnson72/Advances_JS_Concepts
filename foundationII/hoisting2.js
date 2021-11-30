
//the declaration gets hoisted but not the value
console.log(`name before ${name}`);



var name = "brooks"

console.log(`name after = ${name}`)

function  hoister(){
    let one = 1
    if (1 === one){
        console.log(`name 2 ${name2}`)
    }
    var name2 = "steve";
}


const lastname = "johnson";

function reverse(valueToReverse){
    let reversString = '';
    let length = valueToReverse.length;
    for (let i =length -1; i >= 0; i--){
        console.log(valueToReverse[i])
        reversString += valueToReverse[i]
    }
    console.log(reversString)

}

reverse(lastname)