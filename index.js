const express = require("express");
const app = express()
const cors = require("cors")
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config()

const port = process.env.Port || 5000;



// middware
app.use(express.json())
app.use(cors())
// console.log(process.env.DB_USER)
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ga6ydds.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



 async function run (){
    try{


    }
    finally{
       
    }
   
 }
 run().catch(error=>console.log(error))



app.get('/',(req,res)=>{
    res.send("genious car is server is runing")


})



app.listen(port,()=>{
    console.log(` genious car is Server running port${port}`)
})
 //  user name database
 // password hgcecjA35pNtJ86H



