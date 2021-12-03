const user = {
    name: 'Gandalf',
    active: true,
    cart: [],
    purchases: []
}

function Item(name, price){
    return {
        name,
        price,
    }
}

function addToCart(user, item){
   user.cart.push(item);
}

function addTax(user){
    user.cart.forEach(item => {
        const tax = item.price * .03;
        item.price += tax;
    })
}

function buyItems(user){
    user.cart.forEach(item => user.purchases.push(item))
}

function emptyCart(user){
    user.cart.forEach(item => user.cart.pop())
}



const toothPaste = new Item('toothpaste', 5.00);
addToCart(user, toothPaste);
addTax(user)
buyItems(user);
emptyCart(user);
console.log(user)