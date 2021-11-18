const mongoose=require("mongoose")

const  AuthorModel= require("../models/myAuthorModel.js")

const PublisherBookModel=require("../models/publisherBookModel")

const PublisherModel=require('../models/publisherModel')

const createPublisher=async function(req, res){
    let Data=req.body
    let SaveData=await PublisherModel.create(Data);
    res.send(SaveData)
}
const publisherBook=async function(req,res){
    let data=req.body
    let author=req.body.author
    let publisher=req.body.publisher
    let authorFromRequest=await AuthorModel.findById(author)
    let publisheFromRequest=await PublisherModel.findById(publisher)
    if(authorFromRequest){
        if(publisheFromRequest){
            

        
        let bookCreated= await PublisherBookModel.create(data)
        res.send({data:bookCreated})
        }else{
            res.send('publisher id not valid')
        }
    }else{
        res.send('The author id provided is not valid')
    };

}
const getPublisherBook=async function(req,res){
    
    let publisher= await PublisherBookModel.find().populate('author',{author_name:1 ,age:1});
    res.send(publisher)
}
module.exports.createPublisher=createPublisher
module.exports.publisherBook=publisherBook
module.exports.getPublisherBook=getPublisherBook
