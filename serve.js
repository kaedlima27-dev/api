const express = require('express')
const api = express()
const ejs = require("ejs")
const  nodemon = require("nodemon")
const  mongodb = require ("mongodb")
const  dotenv = require("dotenv")

api.listen(3000,function(){
 console.log("o servidor esta rodando na porta 3000")

})
api.get("/ler",(request,res)=>{
    res.send("ola mundo")
})





