const express=require("express")
const app=express()
const connectDB=require("./config/connectDB")
const Personne = require("./models/Personne")

//middleware
app.use(express.json())
// connect database
connectDB()
//routes
app.use("/personne",require('./routers/personne'))

 

// run server
const port=process.env.PORT||5000
app.listen(port,err => 
    err? console.log(err) : console.log(`server ranning on port ${port} ...........`)

    )
