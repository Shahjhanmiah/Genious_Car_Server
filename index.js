const express = require("express");
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require("cors")
require('dotenv').config()
const port = process.env.Port || 5000;



// middware
app.use(express.json())
app.use(cors())
// console.log(process.env.DB_USER)
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ga6ydds.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
    const serviceCollection = client.db('Foodpanda').collection('services');
    const orderCollection = client.db("Foodpanda").collection("orders")
    try {
        // serviceCollection.insertMany([{name:"shajhan miah"},{Roll:478877},{school:
        // 'Victoriay'}])

        // create a data inserte data
        app.get('/services', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray()
            res.send(services)

        })

        // speace data loade data 
        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const service = await serviceCollection.findOne(query);
            res.send(service);
        })

        // order a get api 

          app.get('/orders',async(req,res)=>{
            let  query = {};
            if(req.query.email){
                query = {
                    email: req.query.email
                }
            }
            const cursor = orderCollection.find(query);
            const orders = await cursor.toArray();
            res.send(orders)

          })
        // post api 

        app.post('/orders', async (req, res) => {
            const order = req.body;
            const result = await orderCollection.insertOne(order);
            res.send(result);
        });


    }
    finally {

    }

}
run().catch(error => console.log(error))



app.get('/', (req, res) => {
    res.send("genious car is server is runing")


})



app.listen(port, () => {
    console.log(` genious car is Server running port${port}`)
})
 //  user name database
 // password hgcecjA35pNtJ86H



