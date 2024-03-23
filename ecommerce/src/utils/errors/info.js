const generateUserErrorInfo = (user) => {
    return `One or more properties where incomplete or not valid.
    List of require properties: 
        * first_name: nedds to be a String, recived ${user.first_name}
        * last_name: nedds to be a String, recived ${user.last_name}
        * email: nedds to be a String, recived ${user.email}   
    `
}

const generateProductErrorInfo = (product) => {
    return `One or more properties were incomplete or not valid.
    List of required properties: 
        * name: needs to be a String, received ${product.title}
        * price: needs to be a Number, received ${product.price}
        * description: needs to be a String, received ${product.stock}   
    `
}

const generateCartErrorInfo = (cartId, productId) => {
    let info = `Cart ID: ${cartId}, Product ID: ${productId}`;
    return info
}


module.exports = { generateUserErrorInfo, generateProductErrorInfo, generateCartErrorInfo }