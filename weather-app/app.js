const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=43102757838af7ddfab80fb1c51eaacc&query=37.8267,-122.423'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})