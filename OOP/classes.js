//This is still prototypical inheritance

class BasketBallTeam{
    roster = []
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }
    addPlayer(name){
        this.roster.push(name)
    }
}


class Celtics extends BasketBallTeam{
    stadium = "Garden"
    constructor(name, city) {
        super();
    }

}