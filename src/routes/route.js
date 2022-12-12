const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');
const mod=require('../logger/logger')


router.get("/profile-details", function(req, res){
    // Write the LOGIC here
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    console.log(`The mentor of the day is ${mentorModule.mentor}`)

    res.send('any dummy text from route handler 1')
});


router.get('/test-me', function(req, res){
    console.log("I am here")
    res.send("any dummy text from route handler 2")
})

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

// PATH Param example
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

// PATH Param example
// router.get("/profile/:name", function(req, res){
//     console.log('Printing the request to find out wjere name is stored',req.params)
//     console.log('user name is',req.params.name)
//     //console.log(`User requesting for profile is ${name}`)
//     res.send("dummy details")
// })

// Query Param example
// router.get("/shoes", function(req, res){
//     console.log("The filter options for shoes are -",req.query)
//     //req.query.size
//     //req.query.brand
//     res.send("dummy shoes response")
// })

// //Problem 1
// router.get('/movie',function(req,resp){
//     let arr=["Spiderman","Brahmastra","Kanchana"]
    
//     resp.send(req.params.index)
// })

// router.get('/profile/:name',function(req,resp){
//     console.log(`User name is  `,req.params.name
//     )
//     resp.send( `Welcome ${req.params.name} How Can I help you `)
// })
// router.get('/movies',function(req,resp){
//    let arr= [ {
//          id: 1,
//         name: 'The Shining'
//        }, {
//         id: 2,
//         name: 'Incendies'
//        }, {
//         'id': 3,
//         'name': 'Rang de Basanti'
//        }, {
//         'id': 4,
//         name: 'Finding Nemo'
//        }]
       
       
//     resp.send(`Your all films ${JSON.stringify(arr)}`)

//     // 2nd
//     router.get('/movie',function(req,resp){
//         let num1=["Spidreman","Batman","Kanchana","Bramhastra","KGF"]
//         resp.send(num1)
//     })
// })

//Problem 1

router.get('/movie',function(req,resp){
    let arr=["Brahmastra","Bahubali","Kgf","spidreman","batman"]
    resp.send((arr))
})

//Problem 2
router.get('/Movie/:movieName',function(req,resp){
    let i=req.params.movieName
    let arr1=["Brahmastra","Bahubali","Kgf","spidreman","batman"]
   //resp.send(`Your favourate movie is ===> ${arr1[i]}`)


   //Problem Number 3
   if(i>0 && i<arr1.length){
    resp.send(`Your favourate movie is ===> ${arr1[i]}`)
   }else{
    resp.send("Please Enter a Valid Index Number")
   }
})

// Problem Number 4

router.get('/film',function(req,resp){
       let arr2= [ {
         id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        name: 'Finding Nemo'
       }]
       //resp.send(JSON.stringify(arr2))
       
})

router.get('/name',function(req,resp){
    mod.myfunction='VINEET'
    resp.send("hi")
})

router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let missingNumber;
    let arr= [2,3,4,5,6,7]
     let sum=arr.reduce((a,b)=>a+b)
     let sum1=arr.reduce((a,b)=>b*(b+1)/2)
     
     if(missingNumber=sum1-sum){
        res.send(  { data: missingNumber  }  );
     }else{
        res.send("Not any missing value")
     }
        
       
     

    ///LOGIC WILL GO HERE 
    
});
router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34,36,37, 38]
    let missingNumber
    let sum=arr.reduce((a,b)=>a+b)
    let sum1=0;
    for(let i=0;i<arr.length;i++){
        sum1=(arr.length-1)*(arr[0]+arr[arr.length-1])/2
    }
    if(missingNumber==(sum-sum1)+1){
        res.send(  { data: missingNumber }  );
     }else{
        res.send("Not any missing value")
     }
        
});





module.exports = router;