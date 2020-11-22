// Setup empty JS object to act as endpoint for all routes

const dotenv = require('dotenv');
dotenv.config();
const apikey = process.env.apiKeyw;
const pdata = {
        'apikey': apikey
    }
    // Express to run server and routes
const express = require('express');
const path = require('path');
const projectData = [];


// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
// app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static('dist'));

// designates what port the app will listen to for incoming requests
app.listen(3000, function() {
        console.log('Example app listening on port 3000')
            // console.log(`Your API key is ${process.env.apiKeyw}`);

    })
    // Initialize all route with a callback function
app.get('/', function(req, res) {
        res.sendFile('dist/index.html')

    })
    //send api
app.get('/key', sendKey);

function sendKey(req, res) {
    res.send(pdata);

}
// Callback function to complete GET '/all'

app.get('/all', sendData);

function sendData(request, response) {
    response.send(projectData);
};
// Post Route

app.post('/wData', addFeel);

function addFeel(req, res) {
    console.log(req.body)
    newEnrty = {
        polarity: req.body.polarity,
        confidence: req.body.confidence,
        subjectivity: req.body.subjectivity
    }

    projectData.push(newEnrty);
    res.send(projectData);
};