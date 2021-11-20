const array = [1, 2, 3, 4];
for (let i = 0;  i < array.length; i++){
    setTimeout(()=> console.log(array[i]), 3000)
}

for (var i = 0; i < array.length; i++){
    (function (closurei){
        setTimeout(()=>{
            console.log(`I am at ${closurei}`);
        }, 3000)
    })(i)
}