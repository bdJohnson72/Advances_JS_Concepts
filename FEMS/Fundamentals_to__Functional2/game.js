const game = {
    solved: false,
    turn: 0,
    rooms: ['parlor', 'library', 'conservatory', 'billiards'],
    characters: [
        {name: "Mrs Scarlett"},
        {name: "Prof Plum"},
        {name: "Col Mustard"},
    ],
    weapons: [
        {name: 'candle stick', location: 'parlor'},
        {name: 'rope', location: "library"},
        {name: 'knife', location: "conservatory"},
        {name: 'gun', location: "billiards"}
    ]
}

game["number of players"] = 0;

console.log(game)