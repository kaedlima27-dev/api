const express = require("express") //fazendo o import
const app = express() //executando a função
const { MongoClient } = require("mongodb")//conectando com o banco de dados
const ejs = require("ejs") //exibir
const nodemon = require("nodemon") //conectar
const mongodb = require("mongodb")
const dotenv = require("dotenv")
dotenv.config()
const url = process.env.DATABASE_URL
const objectId = require("mongodb").ObjectId
const client = new MongoClient(url)
const db = client.db("pessoa");
const collection = db.collection("crud")

app.listen(3000,function(){
    console.log("Servidor rodando na porta 3000")
})

app.get("/ler", (request, response)=>{
    response.send("Olá, mundo!")
})