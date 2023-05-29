
const jwt = require("jwt")

function jwtValidate(req, res){
  jwt.verify(process.env.key, token, (result, error)=> {
    if(error){
      return res.status(401)
      .send("")
    }
  })
}

