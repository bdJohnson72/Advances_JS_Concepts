//Bad practice to assign the prototype chain our selves

const BasketBallTeam = {
    seasonPoints: 0,
    roster : [],
    addRoster: (player) => {
        if (!this.roster){
            this.roster = [];
        }
        this.roster.push(player);
    },
    removeFromRoster:  (player) => {

        const index = this.roster.indexOf(player);
        if (index !== -1){
            this.roster.splice(index);
        }
    }
}

const Celtics = {
    name: 'Celtics'
};
Celtics.__proto__ = BasketBallTeam;

/*for (let prop in Celtics){
    console.log(prop);
    if (Celtics.hasOwnProperty(prop)){
        console.log(`my own prop ${prop}`)
    }
}*/

Celtics.addRoster('Larry Bird');
console.log(Celtics.roster);
console.log(BasketBallTeam)

let lakers = Object.create(BasketBallTeam);
console.log(lakers)
lakers.name = 'Lakers';
console.log(lakers)
