 const NewDate=function(){
    let a=new Date()
    return a
 }
 //console.log(NewDate())
 module.exports.Newdate=NewDate
 const nameOfMonth = new Date().toLocaleString(
    'default', {month: 'long'}
  );
  module.exports.Newmonth=nameOfMonth
 // console.log(nameOfMonth);
  

 const getBatchInfo=function(Batch,week,day,topic){
    console.log(`My batch is ${Batch} and currently I have in Week ${week}and Day ${day} the topic been tought today ${topic}`)
 }
 module.exports.getbatchinfo=getBatchInfo
 //console.log(getBatchInfo("californium",4,4,"Node js"))