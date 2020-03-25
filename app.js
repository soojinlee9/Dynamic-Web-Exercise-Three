const express = require('express'); //object
//node doesn't import

const app = express();
const port = 4000;

//app.get('/', (req, res) => res.send('Hello World!')); //function being called

const indexRoute = require('./routes/index.js');
const aboutRoute = require('./routes/about.js');

//static files
app.use('/static', express.static("public"));

//routing in express
app.use('/', indexRoute); //shows index.js on localhost:4000/
app.use('/about', aboutRoute); //shows about.js on localhost:4000/about

app.listen(port, () => console.log(`Hello World Running!`)); //shows up on terminal


//use npm run start on terminal