const axios = require("axios");

// res.status(200). send( { data: userDetails } )

const getStatesList = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    const cowinStates = await axios(options);

    console.log("WORKING");
    let states = cowinStates.data;
    res.status(200).send({ msg: "Successfully fetched data", data: states });

  } 
  catch (err) {
    console.log(err.message);
    res.status(500).send({ msg: "Some error occured" });
  }

};


const getDistrictsList = async function (req, res){

    try{ 
        let id= req.params.stateId
        console.log(" state: ", id)

        let options = {
            method: "get",
            url : `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}` //plz take 5 mins to revise template literals here
        }
        let response= await axios(options)

        let districts= response.data
        
        console.log(response.data)
        res.status(200).send( {msg: "Success", data: districts} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}

const getByPin = async function (req, res){

    try{ 

        let pin= req.query.pincode
        let date= req.query.date

        let options = {
          method : "get",
          url : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let response= await axios(options)
        


        let centers= response.data
        console.log(centers)
        res.status(200).send( {msg: "Success", data: centers} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}


const getOtp = async function (req, res){

    try{ 

         let options = {
          method : "post", // method has to be post
          url : `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
          data: { "mobile": req.body.mobile  } // we are sending the json body in the data 
        }
        let response= await axios(options)

        let id= response.data
        res.status(200).send( {msg: "Success", data: id} )

    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}
const getWeather = async function (req, res){

  try{ 
       let city=req.query.city
       let appid=req.query.appid

       let options = {
        method : "get", // method has to be post
        url : `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        
      }
      let response= await axios(options)

      let id= response.data.main.temp
      res.status(200).send( {msg: "Success", data: id} )

  }
  catch(err) {
      console.log(err.message)
      res.status(500).send( { msg: "Something went wrong" } )
  }
}
const cityTemp=async function(req,res){
  try{
    // let city=req.query.city
    // let appid=req.query.appid
    // let arr=[]
    let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let arr=[]
    for(let i=0;i<cities.length;i++){
    let obj={city:cities[i]}
    
    let options={
      mathod:"get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=39317bcceb77f7c45d817d9088d361b4`
    }
    let response=await axios(options)  
    console.log(response.data.main.temp)
    obj.temp=response.data.main.temp
      
    arr.push(obj)
  }
  let sorted=arr.sort( function(a,b) {return a.temp-b.temp})
  console.log(sorted)
    res.status(200).send({status:true, data:sorted})
}

  catch(err){
    console.log(err.message)
    res.status(500).send( { msg: "Something went wrong" } )
  }
}

module.exports.getStatesList = getStatesList;
module.exports.getDistrictsList = getDistrictsList;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.getWeather=getWeather;
module.exports.cityTemp=cityTemp