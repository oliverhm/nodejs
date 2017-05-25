global.__modules = __dirname + '/lib';

var app = require('./config/custom-express')();

app.listen(3000, function(){
  console.log('Server is running in 3000 port');
});