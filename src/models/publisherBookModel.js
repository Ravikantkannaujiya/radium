const mongoose=require('mongoose')

const publisherBookSchema=new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    author:{type:mongoose.Schema.Types.ObjectId, ref:'MyAuthor'},
    price:Number,
    ratings:Number,
    publisher:{type:mongoose.Schema.Types.ObjectId, ref:'myPublisher'}

},{timestamps:true});
module.exports=mongoose.model('Publisherbook',publisherBookSchema)
