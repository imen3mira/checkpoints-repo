var express = require("express")
var app = express()
var hbs =require("hbs")

app.set('view engine', hbs)


app.use(express.static(__dirname+'/views'))

app.get ('/Contact' ,(req, res)=>{
    res.render('Navbar.hbs',{ body : 'Contact.hbs'})
})





app.listen( 3000, (err)=> {
    if (err) console.log["server is not running"]
    else console.log("server is ranning .///.........")
})