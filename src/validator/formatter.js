const { lowerCase } = require("lodash")

const str=function (num){
   let a= num.trim()
   return a
}
module.exports.srting=str
//console.log( str("     kjk  "))
 
const Lower=function(name){
    let b=name.toLowerCase()
    return b
}
module.exports.LowerCase=Lower
//console.log(Lower("HGDF"))

const Upper=function(name){
    let b=name.toUpperCase()
    return b
}
module.exports.UpperCase=Upper
console.log(Upper("erhhrte"))
 
 