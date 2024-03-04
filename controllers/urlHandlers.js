const Url = require("../models/urlSchema");
const shortid = require("shortid");

async function addUrlHandler(req,res){
    const body=req.body;
    if(!body.first_url) res.status(401).json({msg:"Link must be provided"}); 
    const shortID=shortid();

    try{
        await Url.create({
            first_url: body.first_url,
            sorted_url: shortID
        })
        res.json({msg:shortID});
    }
    catch{
        res.json({msg: "Not able generate shor id"});
    }
}

module.exports={addUrlHandler};