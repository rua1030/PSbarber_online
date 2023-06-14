const express = require ('express');
const {MongoClient, ObjectId} = require('mongodb')
const responseApi = require('./routers')
const bodyParser= require('body-parser')


const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

responseApi(app)

app.get('/',(req, res)=>{
    res.send('hello world')
})


app.listen(3000,()=>{
    console.log('server in line')
})