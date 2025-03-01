// index.js
// where your node app starts

// init project
require('dotenv').config();
const https = require('https')
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (_, res) => {
  https.get('https://api64.ipify.org/?format=json', (response) => {
    let data = "";
    response.on("data", (chunk) => (data += chunk));
    response.on("end", () => {
      return res.json({ 
        ipaddress: JSON.parse(data).ip,
        language: "hindi,english", 
        software: "Windows 11, Chrome" 
      });
    });
  }).on("error", (err) => {
    res.json({ error: "Unable to fetch IP", details: err.message });
  })
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
