//PACKAGES
const path = require('path');
const logger = require('morgan');
const express = require('express');
const hbs  = require('hbs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


//APP SETTINGS
const app         = express();
const port        = process.env.PORT || 3000;
//SET UP APPLICATION PARAMS
const TodontsController = require('./controller/todonts');
// LOG
app.use( logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride('_method'));


//VIEWS
app.set('view engine', 'hbs');

app.use('/todonts', TodontsController);

//HOME
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});



// Start server
app.listen(port, function() {
  console.info('Server ready...', port,"//", new Date());
});