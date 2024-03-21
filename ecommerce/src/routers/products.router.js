//importación de módulos
const { Router } = require ("express")
const { passportCall}  = require ('../middleware/pasportCall.js')
const { authorization } = require ('../middleware/authentication.js')
const ProductController = require ('../controllers/products.controller.js')
const { faker } = require('@faker-js/faker')


const productsRouter = Router ()
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct} = new ProductController ()

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

productsRouter.get('/mockingproducts', (req, res) => {
    let products = []
    for (let i = 0; i < 100; i++) {
        products.push(generateProducts())        
    }
    res.send({
        status: '',
        payload: products
    })
})

//Endpoint para solicitar todos los productos
productsRouter.get('/', getProducts)

//Endpoint para solicitar un producto por id
productsRouter.get('/:pid', getProduct) 

//Endpoint para agregar un nuevo producto
productsRouter.post('/', passportCall ('jwt'), authorization (['ADMIN']), createProduct)

//Endpoint para actualizar campos de un producto por id
productsRouter.put('/:pid', passportCall ('jwt'), authorization (['ADMIN']), updateProduct)

//Endpoint para eliminar un producto por id
productsRouter.delete('/:pid', passportCall ('jwt'), authorization (['ADMIN']), deleteProduct)


module.exports = productsRouter

