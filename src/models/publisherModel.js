const mongoose=require('mongoose')

const myPublisherSchema=new mongoose.Schema({
   
        name:String,
        headQuater:String
    
},{timestamps:true})

module.exports=mongoose.model('myPublisher',myPublisherSchema)