const a=require("./loggerr")
const b=require("./util/helper")
const c=require("../validator/formatter")
const lod=require('lodash')
function mainfunction(){
    console.log('this is my main function')
}
a.log('My name is Ravi kant kannaujiya')
a.welcome()
console.log('This is endpoint url sys:'+a.endpoint)
b.printdate()
b.printmonth()
b.getBatchinfo()
c.trim1()
c.lowerCase()
c.upperCase()
console.log(lod.chunk(['jan','fab','march','april','may','june','july','Aug','sep','oct','nov','dec'],3));
console.log(lod.tail([1,2,3,4,5,6,7,8,9,10],9));
console.log(lod.union([1,2],[3,4,2],[5,6,7,1],[8,9,11],[4,12,13]));
console.log(lod.fromPairs([['Ravi',1],['Kant',2],['kannaujiya',3]]));
