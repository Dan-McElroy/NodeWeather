const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    request({ 
        url: 'http://api.weatherstack.com/current',
        qs: {
            access_key: '43102757838af7ddfab80fb1c51eaacc',
            query: latitude + `${latitude},${longitude}`
        },
        json: true 
    }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!')
            return
        }
    
        if (response.body.success === false) {
            callback('Unable to find location')
            return
        }
    
        const current = response.body.current
        callback(undefined, `${current.weather_descriptions[0]}: it is currently ${current.temperature} degrees. It feels like ${current.feelslike} degrees out.`)
    })
}

module.exports = forecast