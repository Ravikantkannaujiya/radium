function Trim(){
    let a = "Ravi   "
    //a.trim()
    console.log(a.trim())
}
function changeToLowerCase(){
    let a = "Ravi   "
    console.log(a.toLowerCase())
}
function changeToUpperCase(){
    let a = "Ravi   "
    console.log(a.toUpperCase())
}


module.exports.trim1 = Trim
module.exports.lowerCase = changeToLowerCase
module.exports.upperCase = changeToUpperCase
