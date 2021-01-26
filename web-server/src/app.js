const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Dan',
        age: 28
    }, {
        name: 'Andrew',
        age: 27
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
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