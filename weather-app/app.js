const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


geocode('Boston', (error, data) => {
    if (error) {
        console.log(error)
        return
    }
    console.log('Data: ' + JSON.stringify(data))
})


forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })