Date.prototype.lastYear = function (){
  return this.getFullYear()-1
}

console.log(new Date('1900-10-10').lastYear())


Array.prototype.map = function (){
  let arr = [];
  for (let i = 0; i < this.length; i++){
    arr.push((this[i] + '🚨'))
  }
  return arr;
}

const myArr = [1, 2, 3];

const result = myArr.map((item) => {
  return item;
})
Function.prototype.bind = function(whoIsCallingMe){
  const self = this;
  return function(){
    return self.apply(whoIsCallingMe, arguments);
  };
}
console.log(result)