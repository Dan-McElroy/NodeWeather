const request = require('postman-request')

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

request({
    url: 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json',
    qs: {
        access_token: 'pk.eyJ1IjoiZGFubWNlbHJveSIsImEiOiJja2tlZ3VxYWMwMG1iMnZtcDB1Nzl2ZGppIn0.yTmkyzgh1CUMVQdGCf4MBg',
        limit: 1
    },
    json: true
}, (error, response) => {
    if (error) {
        console.log('Unable to connect to geocoding service!')
        return
    }

    if (response.body.features.length === 0) {
        console.log('No results found!')
        return
    }

    const coordinates = response.body.features[0].center
    console.log('Latitude: %f, Longitude: %f', coordinates[1], coordinates[0])
})