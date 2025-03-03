const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { array } = require('joi');
const usersSchema = new Schema({
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
module.exports = usersSchema;