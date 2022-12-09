const express = require('express');
const router = express.Router();
const intro = require('./introduction');
const employee = require('./employee');
const _ = require('underscore');
const lodash=require('lodash') ;
const Welcome=require('../logger/logger');
const New=require('../util/helper');
const month=require('../util/helper');
const getBatchInfo=require('../util/helper');
const str=require('../validator/formatter')
const Upper=require('../validator/formatter')
const Lower =require('../validator/formatter')

 router.get('/movies',function(req,resp){
    let movie=["Batman","Bramhastra","Spiderman"]
    resp.send(`All movie is==> ${movie}`)
 })


router.get('/test-me', function (req, res) {
    //console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
   // console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const Month=["January","february","March","April","May","June","july","August","September","October","November","December"]
    
    // const result=lodash.chunk(Month,4)
    // console.log(result)
    // const num=[1,2,3,4,5,6,7,8,9,10]
    // const result =lodash.tail(num)
    // console.log(result)
    // //4 const arr=[[2,3],[2,5],[5,6]]
    //const result =lodash.union(arr)
    //console.log(result)
    const arr=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    const result =lodash.fromPairs(arr)
    console.log(result)
    //let result = _.first(days, 4)
    //let result = lodash.chunk(days,3)
    //const arr=[["Name","Vineet"],["Age",21],["Qalification","Bsc(Chemistry)"]]
//    console.log( New.Newdate())
//      console.log(getBatchInfo.getbatchinfo("clifornium",4,4,"Node js"))
    //console.log(month.Newmonth())
//    /   console.log(str.srting("       vineet"))
//      console.log(Upper.UpperCase("vineet kumar"))
//       console.log(Lower.LowerCase("NAME IS VINEET KUMAR"))

    //let result=lodash.tail(days,4)
    //let result=lodash.fromPairs(arr)
    //console.log(result)
   // console.log(`Result from underscore function is ${result}`)
     Welcome.name("vineet")
// 1=> console.log(Welcome)
    res.send('This is my frist API')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;