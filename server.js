var express = require('express');
var path = require('path');
var app = new express();
var bodyParser = require('body-parser');
var sendgrid  = require('sendgrid')('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');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var server = app.listen(process.env.PORT || 3000);

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.post('/form', function(req, res){
  var username = req.body.username;
  var email = req.body.email;
  var message = req.body.message;
  var user_info = 'Name:' + ' ' + username + '    ' + 'Email:' + ' ' + email + '    ' + 'Message:' + ' ' +message

  sendgrid.send({
    to:       'bgdeutsch@gmail.com',
    from:     'noreply@briandeutsch.com',
    subject:  'I have a message for you!',
    text:     user_info
  }, function(err, json) {
    if (err) { return res.send('Oops! Something has gone wrong.'); }
    res.redirect('/');
  });
});
