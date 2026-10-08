const express = require('express')
const api = express()
const ejs = require("ejs")
const  nodemon = require("nodemon")
const  dotenv = require("dotenv")
doten.config()
const url = process.env.DATABASE_URL
const {mongoclient} = require ("mongodb")

api.set("view engine", "ejs")


api.listen(3000,function(){
 console.log("o servidor esta rodando na porta 3000")

})
api.get("/ler",(request,res)=>{
    res.send("ola mundo")
})



