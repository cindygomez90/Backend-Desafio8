//la carpeta completa (errors) va dentro de utils

//creación de clase para crear un error
class CustomError {
    // creando un método
    //las funciones estáticas se pueden llamar sin instanciar
    //se colocan los valores por defecto que tendrán los parámetros
    static createError({name = 'Error', cause = 'cause', message = 'no declarado', code = 1}){  
        let error   = new Error(message)    //instanciar el error
        //se agregan propiedades
        error.name  = name
        error.code  = code 
        error.cause = cause
        throw error // va a producir el error
    }
}

module.exports = {
    CustomError
}