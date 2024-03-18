const express = require('express')

const app = express();

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render('home',{
        message: 'burasi'
    })
})

app.get('/home', (req, res) => {
    res.render('home', {
        message: 'Welcome Home Dude!'
    })
})

module.exports = app
