console.log('Client side js file loaded')

fetch('/weather?address=Glasgow').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            return console.log(data.error)
        }
        console.log(data)
    })
})