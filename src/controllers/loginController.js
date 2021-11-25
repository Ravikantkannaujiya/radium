// const login = async function (req, res) {
//     let userName= req.body.name
//     let password= req.body.password
  
//     let credentials=await userModel.findOne({userName:userName})
//     if(credentials && credentials["isDeleted"]=="false"){
//             res.send({status:true,})
//     }else{
//       res.send({msg:"user name not found"})
//     }
   
//   };