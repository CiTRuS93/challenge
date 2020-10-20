var exec = require("child_process").exec;


var events = {};
var words = {};
var child = exec("generator-windows-amd64.exe");

child.stdout.on("data", function (data) {
     writeData(data)
  });
  


child.on("close", function () {
  console.log("done");
  console.log(events);
});



function writeData(data) {

  data.split("\n").forEach(function (line) {
    
      new Promise(function (resolve,reject) {
      try {
      obj = JSON.parse(line);
      resolve(obj)
      }catch{
        reject()
      }
    }).then(function (obj) {
      writeEvent(obj.event_type);
      writeWord(obj.data);},()=>{})
      
    
  }
  )
}

function writeWord(word) {
  if (words[word]) {
    words[word]++;
  } else {
    words[word] = 1;
  }
}

function writeEvent(event) {
  if (events[event]) {
    events[event]++;
  } else {
    events[event] = 1;
  }
}

var url = require('url'); 
var http = require('http');
//create a server object:
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  new Promise(function (resolve, reject) {
  if(q.path=='/events/countWords'){
    resolve(words)
  }else if(q.path == '/events/countByEventType'){
    resolve(events)
  }else{
    reject()
  }
   //end the response
}).then((counter)=>{
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(counter)); //write a response to the client
  res.end();
},()=>{
  res.statusCode = 400;
  res.end('400: Bad Request');
  return;
})
}).listen(8080); //the server object listens on port 8080 

