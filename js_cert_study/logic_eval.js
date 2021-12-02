const truthy = true;
const falsy = false;

const dog  = 'ino'
const wife =  'naida'

console.log(wife && truthy)
console.log(truthy && wife)

console.log(falsy || wife && dog)
console.log(wife || 'default')