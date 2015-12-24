var express = require('express');
var path = require('path');
var fs = require('fs');
var app = new express();
var validator = require("validator");
var bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var server = app.listen(process.env.PORT || 3000);

app.use('/public', express.static(__dirname + '/public'));

console.log('The server is now listening on port 3000.');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.post('/form', function(req, res){
  var username = req.body.username;
  var email = req.body.email;
  var message = req.body.message;
  var user_info = 'Name:' + ' ' + username + '   ' + 'Email:' + ' ' + email + '   ' + 'Message:' + ' ' +message

  fs.appendFile('message.txt', user_info+'\n', function (err) {
  if(err){
    return res.send('err');
  }
    return res.redirect('/');

  });
});
