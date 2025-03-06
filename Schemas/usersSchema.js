const mongoose = require('mongoose');
const { array } = require('joi');
const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
  email:  {
    type:String,
    required:true
    },
    attendedQuizzes:{
        type:Array,
        default:[]
    }
})
module.exports = {usersSchema};