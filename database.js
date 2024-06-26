const mongoose=require('mongoose');

require('dotenv').config();

const dbConnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("Db Connection Successful"))
    .catch((error)=>{
        console.log("Db Connection Failed");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports=dbConnect;