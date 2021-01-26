// Obj prop shorthand

const userName = 'Dan'
const userAge = 27

const user = {
    userName,
    age: userAge,
    location: 'Berlin'
}

console.log(user)

// Obj destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label:productLabel, stock = 314, rating = 5} = product

console.log(productLabel)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)