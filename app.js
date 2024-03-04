const express=require("express");
const connectmongodb=require("./connection");
require('dotenv').config();
const app=express();
const route=require("./router/urlRouter");
const Url=require("./models/urlSchema");
const bodyperser=require("body-parser");


const PORT=8000;
const url=process.env.MONGO_URL;

connectmongodb(url).then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log("Something went wrong"));;

app.use(bodyperser.urlencoded({extended: false}));
app.use(bodyperser.json());

app.use("/url",route);

app.get("/",(req,res)=>{
    res.json({msg:"on index route"});
})
app.get("/:shortID",async(req,res)=>{
    const shortID=req.params.shortID;
    try{
        const entry=await Url.findOne({sorted_url:shortID});
        res.redirect(entry.first_url);
    }
    catch{
        res.json({msg: "Can't redirect"});
    }
});


app.listen(PORT,()=>console.log(`Server started at PORT ${PORT}`));