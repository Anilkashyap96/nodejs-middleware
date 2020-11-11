//There are two ways we can use middleware

const express = require('express')
const app     = express()

app.use(logger)  //First place to use middleware, it will be applied for all api/request

app.get('/', auth, (req, res) =>{   //second place to use, it will be applicable only for this call
    console.log("Home Page")
    res.json({name : "Anil"})
})

//Authentication Middleware 
function auth(req, res, next){
    if(req.query.admin === 'true'){
        console.log("Before")
        next()
        console.log("After")
    }
    else{
        res.send("No auth")
    }
}

//logger middleware
function logger(req, res, next){
    console.log("before")
    next()
    console.log("after")
}

app.listen(3000, function(){
    console.log(`Server restarted`)
})