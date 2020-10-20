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

