const mongoose=require('mongoose')

const myBookSchema= new mongoose.Schema({
       
    name:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'MyAuthor'
    },
    price:Number,
    ratings:Number,
    
    
   
}, {timestamps: true})

module.exports = mongoose.model( 'MyBook', myBookSchema ) 