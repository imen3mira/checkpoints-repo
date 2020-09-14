const express=require('express')
const router=express.Router()
const Personne=require('../models/Personne')



//Personne.create([{name:"imen" , age:21, favoriteFoods:["spaguitti", "pizza"]},
//{name:"fatma" , age:15, favoriteFoods:["chappatti", "banbalouni"]},
//{name:"ons" , age:17, favoriteFoods:["spaguitti", "pizza"]}])

// @path http://localhost:5000/personne/addPersonne
// add personne
//
router.post('/addPersonne',(req,res)=>{
    const {name,age,favoriteFoods}=req.body
    const newPersonne= new Personne ({
        name,age,favoriteFoods
    })
    newPersonne.save()
    .then(personnes=> res.send(personnes))
    .catch(err => console.log(err))
} )

//@path http://localhost:5000/personne/allPersonne
//get all personne
//
router.get('/allPersonne',(req,res)=>{
    Personne.find()
    .then(personnes=> res.send(personnes))
    .catch(err => console.log(err))
})

//@path : http://localhost:5000/personne/deletePersonne/:_id
//delette personne
//
router.delete('/deletePersonne/:_id',(req,res)=> {
    const {_id}=req.params
    Personne.findOneAndRemove({_id})
    .then(personnes=> res.send(personnes))
    .catch(err => console.log(err))
})

// @ path :  http://localhost:5000/personne/findOne/:_id
// get personne by findOne
//
router.get('/findOne/:_id' , (req,res)=>{
    const {_id}=req.params
    Personne.findOne({_id})
    .then(personnes=> res.send(personnes))
    .catch(err => console.log(err))
})

// @ path :  http://localhost:5000/personne/personneByID/:_id
// get personne by findOne
//
router.get('/personneByID/:_id' , (req,res)=>{
    const {_id}=req.params
    Personne.findById({_id})
    .then(personnes=> res.send(personnes))
    .catch(err => console.log(err))
})
//@path : http://localhost:5000/personne/editPersonne/:_id
//edit personne
//
router.put('/editPersonne/:_id' , (req,res)=>{
    const {_id}=req.params
    const {name,age,favoriteFoods}=req.body
Personne.findOneAndUpdate({_id},{$set:{name,age,favoriteFoods}})
})

module.exports=router
