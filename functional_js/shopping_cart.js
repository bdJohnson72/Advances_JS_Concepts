let user = {
    name: "Brooks",
    active: true,
    cart: [],
    purchases: [],
}


const compose = (f, g)  => (...args) => f(g(...args));

function purchaseItems(...functions){
    return functions.reduce(compose)
}

function addItemsToCart(user, item){
    const updatedCart = user.cart.concat(item);
    console.log(updatedCart)
    return Object.assign({}, user, {cart: updatedCart});
}

function applyTax(user, item){
    const taxRate = 1.2;
    const {cart} = user;
    console.log(cart)
    const updatedCart = cart.map( (item) => {
        console.log(`the item is ${JSON.stringify(item)}`)
        return {
            name: item.name,
            price: item.price * taxRate
        }
    })
        return Object.assign({}, user, {cart: updatedCart});
}

function buyItem(user, item){
 const itemsInCart = user.cart;
 return Object.assign({}, user, {purchases: itemsInCart})
}

function emptyCart(user, item){
    return Object.assign({}, user, {cart: {}})
}

console.log(purchaseItems(emptyCart, buyItem,applyTax, addItemsToCart)(user, {name: "laptop", price: 2000}))