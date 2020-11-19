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
app.use(express.static(path.join(__dirname, 'dist')));

// designates what port the app will listen to for incoming requests
app.listen(3000, function() {
        console.log('Example app listening on port 3000')
    })
    // Initialize all route with a callback function
app.get('/', function(req, res) {
        res.sendFile('dist/index.html')

    })
    //send api
app.get('/key', sendKey);

function sendKey(req, res) {
    res.send(pdata);
    console.log('eeeeeh')



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
// var https = require('follow-redirects').https;
// var fs = require('fs');

// var options = {
//     'method': 'POST',
//     'hostname': 'api.meaningcloud.com',
//     'path': '/sentiment-2.1?key=c52beb1bb84d33fce045fa1c7b385334&lang=en&txt=love.&model=general',
//     'headers': {},
//     'maxRedirects': 20
// };

// var req = https.request(options, function(res) {
//     var chunks = [];

//     res.on("data", function(chunk) {
//         chunks.push(chunk);
//     });

//     res.on("end", function(chunk) {
//         var body = Buffer.concat(chunks);
//         console.log(body.toString());
//     });

//     res.on("error", function(error) {
//         console.error(error);
//     });
// });

// req.end();