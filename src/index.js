const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const requestIp = require('request-ip');
// inside middleware handler
const ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req); 
    console.log( clientIp)
    next();
};


const midGlb= function (req, res, next) {
    console.log("Hi I am a GLOBAL middleware");
    // console.log()
    //logic
    next()    
}
const DMYT=function(req,res,next){
    var currentdate=new Date();
    var datetime=currentdate.getDate()+" "+(currentdate.getMonth()+1)+" "+currentdate.getFullYear()+" "+currentdate.getHours()+":"+currentdate.getMinutes()+":"+currentdate.getSeconds();
    let ip=req.ip
    let Url=req.originalUrl
    console.log(`${datetime} ${ip} ${Url}`)
    next();
                
}
app.use(DMYT)
app.use(midGlb)
app.use(ipMiddleware)

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/RaviKantKannaujiyaDB-database?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(() => console.log('mongodb running and connected'))
    .catch(err => console.log(err))





    
app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});