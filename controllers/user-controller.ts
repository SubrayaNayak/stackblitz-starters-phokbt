 class UserController{

   async getAllUsers(req, res){

    try{
      const users =  await userRepository.getAllUsers()

      res.status(200).send({
        status:true,
        data:users
      })
    }catch(e){
      res.status(500).send({
        status:false,
        data:null
      })
    }
  }
}


export const userCotroller = new UserController()