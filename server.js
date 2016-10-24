'use strict'

let express = require("express")
const PORT = 8080

let app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log('App started at port: ' + PORT)
})