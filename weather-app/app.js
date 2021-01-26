const request = require('postman-request')
const geocode = require('./utils/geocode')

request({ 
    url: 'http://api.weatherstack.com/current',
    qs: {
        access_key: '43102757838af7ddfab80fb1c51eaacc',
        query: '37.8267,-122.423'
    },
    json: true 
}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
        return
    }

    if (response.body.success === false) {
        console.log('Unable to find location')
        return
    }

    const current = response.body.current
    console.log('%s: it is currently %f degrees. It feels like %f degrees out.', 
        current.weather_descriptions[0], current.temperature, current.feelslike)
})

geocode('Boston', (error, data) => {
    if (error) {
        console.log(error)
        return
    }
    console.log('Data: ' + JSON.stringify(data))
})