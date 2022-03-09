const express = require('express');
//define all routes in application 
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Configure Express Server and initialize it 
const app = express();
const PORT = process.env.PORT || 3001;

//set up json parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//making public folder accessible to express server
app.use(express.static('public'));

//setup routes 
 app.use('/api', apiRoutes); 
app.use('/', htmlRoutes); 


app.listen(PORT, () => console.log('http://localhost:'+PORT)); 