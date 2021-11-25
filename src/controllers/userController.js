const userModel=require("../models/userModel")
const jwt=require('jsonwebtoken')

const createUsers = async function (req, res) {
    const user= req.body
    let savedUser= await UserModel.create(user)
    res.send({msg: savedUser})
};
const login = async function (req, res) {
  if(req.body && req.body.name && req.body.password){
    let user = await userModel.findOne({name: req.body.name, password: req.body.password, isDeleted: false})
    if(user) {
         let paylod={_id:user._id,name:user.name}
         let token = jwt.sign(paylod, 'radium')
         res.header('x-auth-token',token)
         res.send({status: true, msg:token});
    } else {
      res.send({status: false, message: 'Invalid user name or paasword'})
    }
 }else{
    res.send({status:false,msg:"request body must contain username as well as password"})
  }
// userName = req.body.name
// userPassword = req.body.password

// let user = await userModel.findOne({name: userName, password: userPassword, isDeleted: false})
// if(user) {
//     const generatedToken = jwt.sign({userId: user._id}, "radium")
//     res.send({status: true, data: user._id, token: generatedToken})
// } else {
//     res.send({status: false, message: 'Invalid credentials'})
// }

};
//token validation
const getUserDetails=async function(req,res){

  // let token= req.headers['x-auth-token']
  // let validToken=jwt.verify(token,'radium')
  // if(validToken){
  //   if(validToken._id==req.params.userId){
  //     let user=await userModel.findOne({_id:req.params.userId, isDeleted:false})
  //     if(user){
  //       res.send({status:true, data:user})
  //     }else{
  //       res.send({status:false, msg:"user not found"})
  //     }
  //   }else{
  //     res.send({status:false, msg:"not authorized"})
  //   }
  // }else{
  //   res.send({status:false, msg:"Please provide valid Token"})
  // }
  let token = req.headers['x-auth-token']
    if(!token) {
        return res.send({status: false, message: 'No authentication token present'})
    } else {
        let decodedToken = jwt.verify(token, 'radium')
        let userId=req.params.userId
        if(decodedToken._id==userId) {
            let userDetails = await userModel.findOne({_id: req.params.userId, isDeleted: false})
            if(userDetails) {
                res.send({status: true, data: userDetails})
            } else {
                res.send({status: false, message: 'User not found'})
            }

        } else {
            res.send({status: false, message: 'Token not valid'})
        }
    }
}
const getDetails=async function(req,res){
  let token = req.headers["x-auth-token"]
    if(!token) {
        return res.send({status: false, message: 'No authentication token present'})
    } else {
        let decodedToken = jwt.verify(token, 'radium')
        if(decodedToken._id==req.params.userId) {
            let userDetails = await userModel.findOneAndUpdate({ _id: req.params.userId, isDeleted: false }, { email: "xyz@gmail.com" })
            if(userDetails) {
                res.send({status: true, data: userDetails})
            } else {
                res.send({status: false, message: 'User not found'})
            }

        } else {
            res.send({status: false, message: 'Token not valid'})
        }
    }
}
module.exports.createUsers=createUsers
module.exports.login=login
module.exports.getUserDetails=getUserDetails
module.exports.getDetails=getDetails