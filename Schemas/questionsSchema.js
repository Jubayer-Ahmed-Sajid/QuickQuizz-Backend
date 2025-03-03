const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {array} = require('joi');
const questionsSchema = new Schema({
    question:{
        type:String,
        required:true
    },
    options:{
        type:Array,
        default:[]
    },
    correctAnswer:{
        type:String,
        required:true
    }
})
module.exports = questionsSchema;