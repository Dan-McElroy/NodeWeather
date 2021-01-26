const fs = require('fs');

const filePath = '1-json.json'

fs.readFile(filePath, (err, data) => {
    const person = JSON.parse(data.toString());
    
    person.age = 28
    person.name = "Dan"

    fs.writeFile(filePath, JSON.stringify(person), () => {
        console.log("Transformation complete.")
    })
})