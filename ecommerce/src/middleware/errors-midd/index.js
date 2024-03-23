const { EErrors } = require("../../utils/errors/enums");

handleErrors = (error, req, res, next) => {
    console.log(error)

    switch (error.code) {
        case EErrors.INVALID_TYPE_ERROR:    
            return res.send({status: 'error', error: error.name})          
            break;
        case EErrors.PRODUCT_CREATION_ERROR: 
            return res.status(400).json({ status: 'error', error: error.name, cause: error.cause })
            break;
        case EErrors.CART_NOT_FOUND: 
            return res.status(404).json({ status: 'error', error: error.name, cause: error.cause })
            break;
        case EErrors.PRODUCT_NOT_FOUND: 
            return res.status(404).json({ status: 'error', error: error.name, cause: error.cause })
            break;
        case EErrors.ADD_PRODUCT_ERROR: 
            return res.status(500).json({ status: 'error', error: error.name, cause: error.cause })      
            break;

        default:    
            return res.send({status: 'error', error: 'Error de servidor'})
            break;
    }
}

module.exports = { handleErrors }
