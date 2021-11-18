const BookModel= require("../models/mybookModel.js")
const AuthorModel= require("../models/myAuthorModel.js")
const mongoose= require("mongoose")

// const createAuthor = async function (req, res) {
//     const authorr= req.body
//     let savedAuthor= await AuthorModel.create(authorr)
//     res.send({msg: savedAuthor})
// }

const bookCreate = async function (req, res) {
    let data=req.body
    let author=req.body.author
    let authorFromRequest=await AuthorModel.findById(author)
    if(authorFromRequest){
        let bookCreated= await BookModel.create(data)
        res.send({data:bookCreated})
    }else{
        res.send('The author id provided is not valid')
    };
}
const getBooks=async function(req,res){
    
    let books= await BookModel.find().populate('author')
    res.send(books)
}
       
      
    

// module.exports.createAuthor= createAuthor
// module.exports.getBooksData= getBooksData
module.exports.bookCreate=bookCreate
module.exports.getBooks= getBooks
// module.exports.getParticularBooks= getParticularBooks
// module.exports.getXINRBooks= getXINRBooks
// module.exports.getRandomBooks= getRandomBooks