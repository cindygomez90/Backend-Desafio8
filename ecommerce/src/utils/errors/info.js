//este sería el caso de cuando un usuario se registra y algún campo requerido no está completo

const generateUserErrorInfo = (user) => {
    return `One or more properties where incomplete or not valid.
    List of require properties: 
        * first_name: nedds to be a String, recived ${user.first_name}
        * last_name: nedds to be a String, recived ${user.last_name}
        * email: nedds to be a String, recived ${user.email}   
    `
}

module.exports = {
    generateUserErrorInfo
}