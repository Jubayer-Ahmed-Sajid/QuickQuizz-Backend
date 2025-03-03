const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {array} = require('joi');
const submissionSchema = new Schema({
    quizId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    answers:{
        type:Array,
        default:[]
    },
    score:{
        type:Number,
        default:0
    },
    submissionTime:{
        type:Date,
        default:Date.now()
    }
})