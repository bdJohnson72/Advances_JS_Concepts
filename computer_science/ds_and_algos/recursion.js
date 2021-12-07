// simple recurse function to count to 10

function count(max, current){
    if(current > max){
        return;
    }else {
        console.log(current);
        //Is this tail call optimized
        return count(max, current + 1)
    }
}

//count(5, 1);

//Fibonaci

function calulateFibonaci(n){
   if (n <= 1){
       return n;
   }
    return calulateFibonaci(n-1) +  calulateFibonaci(n -2)
}

//console.log(calulateFibonaci(3))
//console.log(calulateFibonaci(9))
//console.log(calulateFibonaci(10))

//Nested Array Addition
var firstArray = [1 , 2, 3];
var secondArray = [1, [2], 3];
var thirdArray = [1, [2, 2, [10, 10]], 3];

function addArray(list, index, initial){
    if (index > list.length -1){
        return initial;
    }
    initial += parseInt(list[index])
   return addArray(list, index + 1, initial)
}

console.log(addArray(thirdArray, 0, 0))