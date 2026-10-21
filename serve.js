const express = require('express')
const api = express()
const ejs = require("ejs")
const  nodemon = require("nodemon")
const  dotenv = require("dotenv")
dotenv.config()
const url = process.env.DATABASE_URL
const {mongoclient} = require ("mongodb")
//fazer query com _id do mongodb
const objectid = require ("mongodb").ObjectId

const client = new mongoclient(url)
//cria o banco de dados com o nome dpessoas create database dP
const db = client.db("pessoas")
//cria uma collection com o nome crud (create table crud)
const collection = db.collection("crud")



api.set("view engine", "ejs")


api.listen(3000,function(){
 console.log("o servidor esta rodando na porta 3000")

})
api.get("/ler",(request,res)=>{
    res.send("ola mundo")
})



