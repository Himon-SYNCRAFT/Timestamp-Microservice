'use strict'

let express = require("express")
const PORT = 8080
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

let app = express()

app.get('/:input', (req, res) => {
    let input = req.params.input
    let date
    
    if (!isNaN(input)) {
        date = new Date(input * 1000)
    } else {
        date = new Date(input)
    }
    
    if (Object.prototype.toString.call(date) == "[object Date]" && !isNaN(date.getTime())) {
        let natural = MONTHS[date.getMonth() - 1] + " " + date.getDay() + ", " + date.getFullYear()
        res.send(JSON.stringify({unix: date.getTime(), natural: natural}))
    } else {
        res.send(JSON.stringify({unix: null, natural: null}))
    }
})

app.get('/', (req, res) => {
    res.send(null)
})

app.listen(PORT, () => {
    console.log('App started at port: ' + PORT)
})