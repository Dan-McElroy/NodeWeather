const doWorkPromise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        //reject('errortiempo')
        resolve([1,4,5])
    }, 2000)
})

doWorkPromise.then(result => {
    console.log(`Erfolg: ${result}`)
}).catch(error => {
    console.log(`Fehler: ${error}`)
})