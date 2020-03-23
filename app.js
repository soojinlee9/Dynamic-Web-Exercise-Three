const express = require('express'); //object
//node doesn't do import

const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('Hello World!')); //function being called

app.listen(port, () => console.log(`Hello World Running!`));

//req=request
//res=response
