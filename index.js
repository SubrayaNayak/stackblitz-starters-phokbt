// run `node index.js` in the terminal

// user address 
// state is california 
//age 20 and 40 
//disabilty  - 


const express = require(express)
const app = express();
const sequalize = require('./sequalize')

const userCOntroller = require('./controllers/user-controller')

app.get("/users",  userController.getAllUsers)
app.get("/users/:id",  userController.getAllUsers)

app.run(process.env.port, {
  console.log("server started ")
})
