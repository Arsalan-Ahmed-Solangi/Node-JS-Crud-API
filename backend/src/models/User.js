const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name :{
        type:String,
        required:true,
    },
    Email :{
        type:String,
        required:true,
        isunique:true,
    }
    ,Phone:{
        type:Number,
        required:true,
    },
    Age:{
        type:Number,
        required:true,
    }
})

module.exports = mongoose.model("User",userSchema)