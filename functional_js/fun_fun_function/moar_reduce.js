fs = require('fs')

const data = fs.readFileSync('./data.txt', "utf-8")
    .trim()
    .split('\n')
    .map(line => line.split(','))
    .reduce((customer, line) => {

        customer[line[0]] = customer[line[0]] || []
        customer[line[0]].push({
            name: line[1],
            price: line[2],
            qty: line[3]
        })
        return customer
    },{})




console.log(data)
