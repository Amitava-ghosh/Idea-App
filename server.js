const express = require('express');
const serverconfig =require('./configs/server.configs');

const app = express();


app.listen(7777, ()=>{
    console.log(`server started on the port number ${serverconfig.port}`);
})