const path = require('path')
const express = require('express')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Dan McElroy'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Dan McElroy'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        helpText: 'Some helpful text'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Really good',
        location: 'Berlin, Germany'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})