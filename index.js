const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT ||5000;
const mongooseURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vqva6ft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(mongooseURI);

// middleware
app.use(cors(
    { origin: "http://localhost:5173",
     credentials: true
    })
 );
 app.use(express.json());

// base route
app.get("/", (req,res)=>{
    res.send('App is running');
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})