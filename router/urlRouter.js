const express=require("express");
const route=express.Router();
const {addUrlHandler}=require("../controllers/urlHandlers");

route.get("/",(req,res)=>{
    res.json({msg:"in url route"});
    });
route.post("/api/set",addUrlHandler);

module.exports=route;