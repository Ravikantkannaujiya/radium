const AuthorModel= require("../models/myAuthorModel.js")
const mongoose= require("mongoose")

const createAuthor = async function (req, res) {
    const authorr= req.body
    let savedAuthor= await AuthorModel.create(authorr)
    res.send({savedAuthor})
}

module.exports.createAuthor= createAuthor