const express = require("express")
const app = express()
const env = require("dotenv")
const mongoose = require("mongoose")
const {Users} = require("./models/Users")

env.config()

//Middleware
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)
//DB connection
mongoose.connect(
    process.env.DB_CONNECT, 
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => {
        console.log("Connected")
    }
)
//GET routes
app.get("/api/users/", (req, res)=>{

})

app.get("/", (req,res) =>{
    res.send(`
        <form action="/api/users/" method="post">
          Name:<input name="name"><br>
          Email:<input name="email"><br>
          Age:<input name="age"><br>
          Birthplac<input name="birthplace"><br>
          <input type="submit">
        </form>
    `)
})
 
//POST routes
app.post("/api/users/",async (req, res)=> {
    console.log(req.body)
    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        birthplace: req.body.birthplace
    })
    try {
       const savedUser = await user.save()
       res.send(savedUser) 
    } catch (error) {
        res.status(400).send(error)
    }    
})
app.listen(5000, () => console.log("Listening on port 5000"))