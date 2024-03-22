//la carpeta completa (errors-midd) va dentro de middleware
//con el next que está en el catch de users.controller.js, se pasa a este middleware que es quien maneja el error
//el error se puede enviar al cliente, mandarlo por consola, etc.

const { EErrors } = require("../../utils/errors/enums");

exports.handleErrors = (error, req, res, next) => {
    console.log(error)

    switch (error.code) {
        case EErrors.INVALID_TYPE_ERROR:    //si es un error de tipo inválido
            return res.send({status: 'error', error: error.name})            
            break;
    
        default:    //si es un error indefinido
            return res.send({status: 'error', error: 'Error de server'})
            break;
    }
}