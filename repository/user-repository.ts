  const sequalize = require('../connections/db.connection.js')
 
 class UserRepository{

  getAllUsers(req, res){
    
    return new Promise((resolve, reject)=> {
      sequalize.query(
`

SELECT 
u.name,
u.id,
u.age
(case when  dis.tempoyry is nuull 
then dis.permenent 
else dis.tempoyry 
end )as disablity
from users u
InnerJoin address add on add.user_id = u.id
InnerJoin disablity dis on dis.userid = u.id
where u.age between (20 and 40)
and add.state = 'california'
`

      )
    })
  }
}
export const userReposito = new UserRepository()