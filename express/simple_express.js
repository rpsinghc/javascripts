var express = require('express');  
var app = express();  
  
app.use(function(req, res,next) {  
    console.log('%s %s', req.method, req.url);  
    next();
  });  

app.get('/', function(req, res) {  
  res.send('Welcome to JavaTpoint!');  
});  
app.get('/help', function(req, res) {  
  res.send('How can I help You?');  
});  
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
console.log("Example app listening at http://%s:%s", host, port)  
})  