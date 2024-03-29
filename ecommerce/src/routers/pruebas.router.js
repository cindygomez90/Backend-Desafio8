const { Router } = require ("express")
const { faker } = require('@faker-js/faker')

const pruebasRouter = Router ()

//Función y endpoint para enviar productos usando mock-faker
const generateProducts = () => {
    const statusProbability = 0.9 
    const isActive = Math.random() < statusProbability

    return {
        id: faker.database.mongodbObjectId(),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        thumbnail: faker.image.url(),
        code: faker.commerce.isbn(),
        stock: parseInt(faker.string.numeric()),
        category: faker.commerce.department(),
        status: isActive
    }
}

pruebasRouter.get('/mockingproducts', (req, res) => {
    let products = []
    for (let i = 0; i < 100; i++) {
        products.push(generateProducts())        
    }
    res.send({
        status: '',
        payload: products
    })
})

module.exports = pruebasRouter
