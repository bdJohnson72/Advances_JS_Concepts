const item1 = document.querySelector('.item1');
const  butts = document.querySelector('#butts');
item1.addEventListener('click', (event)=> {
    console.log(event.target)
    console.log(event.currentTarget)
})

butts.addEventListener('click', (event)  => {
    console.log('click ')
})