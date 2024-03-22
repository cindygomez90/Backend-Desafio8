const { userService } = require ('../repositories/index.js')

class UserController {
    constructor () {
        this.userService = userService
    }

    getUsers = async (request, responses)=>{
        try {
            const users = await this.userService.getUsers()
            responses.json({
                status: 'success',
                result: users
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    getUser =  async (request, responses)=>{
        try {
            const { uid } = request.params
            const user = await this.userService.getUser ( {_id: uid} )
            responses.json({
                status: 'success',
                result: user
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    createUser = async (request, responses)=>{      //async (req, res, next)=>{
        try {
            const { first_name, last_name, email, password } = request.body
            
            
            //si alguno de los campos no viene se va a instanciar el error
            /*if(!first_name || !last_name || !email) {
                CustomError.createError({
                    name: "User creation error",
                    cause: generateUserErrorInfo({
                        first_name,
                        last_name,
                        email
                    }),
                    message: 'Error truing to created user',
                    code: EErrors.INVALID_TYPE_ERROR
                })
            }*/


            const newUser = {
                first_name,
                last_name,
                email,
                password
            }
            
            const result = await this.userService.createUser (newUser)
    
            responses.status(200).send({
                status: 'success',
                usersCreate: result
            })
        } catch (error) {
            console.log(error)  //next(error)
        }
    }
    
    updateUser = async (request, responses)=>{
        try {
            const {uid} = request.params
            const userUpdate = request.body
            const result = await this.userService.updateUser (uid, userUpdate)
            responses.status (200).send ({
                status:'sucess',
                message: result
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    deleteUser = async (request, responses)=>{
        try {
            const {uid} = request.params
            const result = await this.userService.deleteUser (uid)
            responses.status(200).send({
                status: 'succes',
                message: result
            })
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = UserController