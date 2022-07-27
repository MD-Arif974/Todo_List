const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    categories:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

const task = mongoose.model('task',newSchema);
module.exports = task;