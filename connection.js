const mongoose = require("mongoose");

const connectmongodb=async(url)=>{
    return mongoose.connect(url);
}

module.exports=connectmongodb;