const route = require('express').Router();
const fs = require('fs');

//GET '/api/notes' - retrieve all notes from db/db.json file 
route.get('/notes', (req, res) => {
    //read the json file 
    console.log("Inside API GET ")
    fs.readFile('./db/db.json', 'utf8', function(err, data){

        //converting the string data into JSON Object 
        const allNotes = JSON.parse(data);
        console.log("JSON obj", allNotes);

        //return JSON object to te html page 
        res.json(allNotes);

    }) 
})
//POST '/api/notes' - add a note to the  db/db.json file 
route.post('/notes', (req, res) => {
    //read json file
    fs.readFile('./db/db.json', 'utf8', function(err, data){

        //converting the string data into JSON Object 
        const allNotes = JSON.parse(data);
        
        //using spread operator to copy new note value, adding a new id key with the value as length of the notes array 
        const newNote = {...req.body , "id": allNotes.length+1}; 

        //add newnote to the old notes 
        allNotes.push(newNote); 
        console.log("Updated all notes  obj", allNotes);


        fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err,success) =>{
            console.log(success); 

            res.json(req.body); 
        })
    })
})




module.exports = route; 