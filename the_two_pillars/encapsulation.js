
const makeNuke = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction ++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'boom';
    }
    setInterval(passTime, 1000)
    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}

//We can encapsulate the launch by not returning it in the object

const bomb = makeNuke();
console.log(bomb.totalPeaceTime())

let view;

function intitializeView(){
    let called = false;
    const init = () => {
        !called ? console.log('view set') : console.log('view already set');
        called = true;
    }
    return {
        init: init
    }
}

const doit = intitializeView();
doit.init();
doit.init();
doit.init();




