const path = require('path'); 
const route = require('express').Router();

//"/notes"
route.get("/notes", (req,res)=>{
    //send back the html page 
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})
route.get("*", (req,res)=>{
    //send back the html page 
    res.sendFile(path.join(__dirname, '../public/index.html'));
})
module.exports = route; 

