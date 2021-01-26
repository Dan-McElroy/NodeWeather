const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=43102757838af7ddfab80fb1c51eaacc&query=37.8267,-122.423'

request({ 
    url: url,
    json: true 
}, (error, response) => {
    const current = response.body.current
    console.log('%s: it is currently %f degrees. It feels like %f degrees out.', 
        current.weather_description[0], current.temperature, current.feelslike)
})