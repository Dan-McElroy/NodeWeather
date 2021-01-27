console.log('Client side js file loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

const renderMessages = (first = '', second = '') => {
    messageOne.textContent = first
    messageTwo.textContent = second
}

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const {value: location} = search

    renderMessages('Loading...')

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return renderMessages('Error', data.error)
            }
            renderMessages(data.location, data.forecast)
        })
    })
})