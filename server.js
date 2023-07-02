const express = require('express');//imported express file


const app = express();//gives a security guard


app.listen(3333, ()=>{
    console.log("server started");
})
//return "server started" when server have started