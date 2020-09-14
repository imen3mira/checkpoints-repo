const mongoose=require("mongoose")
const schema=mongoose.Schema




const PersonneSchema=new schema({

    name:{type:String},
    age:{type:Number},
    favoriteFoods:{type:[String]}

})




module.exports=Personne=mongoose.model('personne',PersonneSchema)