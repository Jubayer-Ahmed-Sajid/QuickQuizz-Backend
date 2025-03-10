const express = require("express"); 
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const cors = require("cors");

const jwt = require('jsonwebtoken');
dotenv.config();
const userRoutes = require('./Routes/userRoutes');
const quizzRoutes = require('./Routes/quizzRoutes');
const authRoutes = require('./Routes/authRoutes');
const questionRoutes = require('./Routes/questionRoutes')
const PORT = process.env.PORT || 5000; 

// MongoDB connection string with credentials
const mongooseURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vqva6ft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(mongooseURI) 

.then(()=>{

    // Log message indicating successful connection to MongoDB
    console.log("MongoDB connected"); 

    // Authentication routes
    app.use('/auth', authRoutes);
    

    // User related routes
    app.use('/users', userRoutes);

    // Quiz related routes
    app.use('/quizzes', quizzRoutes);

    // Questions related routes
    app.use('/questions', questionRoutes);

    

 })
.catch((err)=>{ 

    console.log(err); 

 });

 // Middleware setup
app.use(cors( 

    { origin: "http://localhost:5173", 
     credentials: true 
    })
 ); 
 app.use(express.json()); 


 // Base route definition
app.get("/", (req,res)=>{ 

    res.send('App is running'); 

})

app.listen(PORT,()=>{ 
    // Log message indicating the server is running
    console.log(`Server is running on port ${PORT}`); 

})
