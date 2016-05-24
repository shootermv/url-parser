const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');
const fs = require('fs');
function readLines(input, func) {
  var remaining = '';

  input.on('data', (data)=> {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      func(line);
      index = remaining.indexOf('\n');
    }
  });

  input.on('end', () =>{
    if (remaining.length > 0) {
      func(remaining);
    }
  });
}

function  func (data) {
  console.log('Line: ' + data);
}

var input = fs.createReadStream('urls.txt');
readLines(input, func);
