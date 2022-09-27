import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();


app.get('/',(req,res)=>{
    res.send('App is running.');
});

const PORT = 5050;
const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
    app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))
)
.catch((err)=>console.log(err))
