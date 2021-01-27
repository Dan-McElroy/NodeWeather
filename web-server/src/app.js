const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup hbs engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

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
        title: 'Help',
        helpText: 'Some helpful text',
        name: 'Dan McElroy'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Really good',
        location: 'Berlin, Germany'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Error',
        errorMessage: 'Help article not found.',
        name: 'Dan McElroy'
    })
})
app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error',
        errorMessage: 'Page not found.',
        name: 'Dan McElroy'
    })
})

app.get('*', (req, res) => {
    res.send('My 404 Page')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})