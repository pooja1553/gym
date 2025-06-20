const mongoose = require('mongoose');

const enrollSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    age:{
        type:String,
    },
    mobile:{
        type:String,
    },
    gender:{
        type:String
    },
    address:{
        type:String,
    },
    plan:{
        type:String
    }
})


const Enroll = new mongoose.model('enroll',enrollSchema);
module.exports=Enroll;