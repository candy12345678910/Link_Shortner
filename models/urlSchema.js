const mongoose=require("mongoose");

const urlSchema=new mongoose.Schema({
    first_url:{
        type: String,
        required: true,
        unique: true
    },
    sorted_url:{
        type: String,
        unique: true
    },
});

const Url=mongoose.model("url",urlSchema);

module.exports=Url;