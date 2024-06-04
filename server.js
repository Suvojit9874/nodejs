const express=require('express');
const app=express();
const dbConnect=require('./config/database');
const  router  = require('./routes/route');
app.use(express.json());
require('dotenv').config();
app.use('/api/v1',router)
const PORT =process.env.PORT ||  5000;
dbConnect();
app.listen((PORT),()=>{
    console.log(`Server is live At ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send("hello ")
})