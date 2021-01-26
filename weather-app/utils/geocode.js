const request = require('postman-request')

const geocode = (address, callback) => {
    request({
        url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json`,
        qs: {
            access_token: 'pk.eyJ1IjoiZGFubWNlbHJveSIsImEiOiJja2tlZ3VxYWMwMG1iMnZtcDB1Nzl2ZGppIn0.yTmkyzgh1CUMVQdGCf4MBg',
            limit: 1
        },
        json: true
    }, (error, response) => {
        if (error) {
            return callback('Unable to connect to geocoding service!')
        }

        if (response.body.features.length === 0) {
            return callback('No results found!')
        }
        const location = response.body.features[0]
        callback(undefined, {
            latitude: location.center[1],
            longitude: location.center[0],
            location: location.place_name
        })
    })
}

module.exports = geocode