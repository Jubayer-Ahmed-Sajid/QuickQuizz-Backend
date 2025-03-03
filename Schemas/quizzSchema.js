const mongoose = require('mongoose'); // Importing Mongoose for MongoDB object modeling

const Schema = mongoose.Schema; // Creating a new Schema constructor from Mongoose

const {array} = require('joi'); // Importing Joi for schema validation

const quizSchema = new Schema({ // Defining the quiz schema structure

    title:{ // The title of the quiz

        type:String,
        required:true
    }, 
    description:{ // A brief description of the quiz

        type:String,
        required:true
    }, 
    questions:{ // An array to hold the questions related to the quiz

        type:Array, // Data type is Array

        default:[] // Default value is an empty array

    }, 
    createdBy:{ // The identifier of the user who created the quiz

        type:String, // Data type is String

        required:true // This field is required

    }, 
    createdAt:{ // The timestamp of when the quiz was created

        type:Date, // Data type is Date

        default:Date.now() // Default value is the current date and time

    }
}) // Exporting the quiz schema

module.exports = quizSchema; // Making the quiz schema available for import in other files
