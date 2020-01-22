const request = require('request');
const readline = require('readline');
const http = require('http');
const express = require('express');
const path = require('path');
const service = require('./services.js');
const bodyParser = require('body-parser')

console.log('IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII');
console.log('II     II    II    II IIII II     II   II   III IIII III   III IIII II');
console.log('II III II II II II II  II  II III II IIII II II  II  II III II  III II');
console.log('II III II II II II II I  I II III II IIII II II I  I II III II I II II');
console.log('II    III II II II II IIII II    III   II I  II IIII II III II II I II');
console.log('II III II II II II II IIII II III II IIII   III IIII II     II III  II');
console.log('II IIII I II II II II IIII II IIII I IIII II II IIII II III II IIII II');
console.log('II III II II II II II IIII II III II IIII II II IIII II III II IIII II');
console.log('II    III    II    II IIII II    III   II II II IIII II III II IIII II');
console.log('IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const app = express();
const port = 3000;
var updatearr = [];
function update(a){
  console.log('update was called');
  updatearr = updatearr.push(a);
};
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('static'));
express.static('public')
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/bomb', (request, response) => {
    console.log(request.body);
    var jobs = service.jobs('+7'+request.body.phone, update);
    for (var i =0; i<jobs.length;i++){
        jobs[i]();
        console.log("running job " + i);
    }
//  response.send("path.join(__dirname + '/index.html')");
});


app.get('/updates', (request, response) => {
  

  //while( updater.length != 0 ) str = str +'<br/>'+updater.pop();
  response.send(updatearr);
 // console.log(updatearr);
});


app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Server is running at http://localhost:${port}`)
});
