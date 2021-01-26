setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Dan', 'Luvi', 'Dominique']

const shortNames = names.filter((name) => name.length <= 4)

const geocode = (address, callback) => {
    const data = {
        latitude: 0,
        longitude: 0
    }
    setTimeout(() => {
        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data.latitude)
    console.log(data.longitude)
})

const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x + y)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

