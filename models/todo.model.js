const mongoose = require('mongoose');
const TodoScheme = new mongoose.Schema({
    todo:{
        type:String,
        required:true,
    },
    done:{
        type:Boolean,
        required: true,
    }
});

module.exports = new mongoose.model("Todo", TodoScheme)