const route = require('express').Router();
const fs = require('fs');

//GET '/api/notes' - retrieve all notes from db/db.json file 
route.get('/notes', (req, res) => {
    //read the json file 
    // console.log("Inside API GET ")
    fs.readFile('./db/db.json', 'utf8', function(err, data){

        console.log(data);

        //converting the string data into JSON Object 
        const allNotes = JSON.parse(data);
        console.log("JSON obj", allNotes);

        //return JSON object to te html page 
        res.json(allNotes);

    })
})
//POST '/api/notes' - add a note to the  db/db.json file 
route.post('/notes', (req, res) => {
    //read the json file 
    console.log("New post ", req.body)

    //fs.readfile 

    //fs.writefile 
    
    
})
//DELETE '/api/notes/:id' -delete a note from db/db.json file 





module.exports = route; 