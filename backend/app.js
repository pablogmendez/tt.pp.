var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

// Connection to DB
mongoose.connect('mongodb://localhost/bluegames', function(err, res) {
 if(err) {
 	console.log('ERROR: connecting to Database. ' + err);
 	throw err;
 }
 else {
 	console.log('Connected to Database');
 }
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());
app.use(require('./middleware/cors'));

// Import Models and Controllers
var premiumAccount     = require('./models/premiumAccount');
var premiumAccountCtrl = require('./controllers/premiumAccount');

var user     = require('./models/user');
var userCtrl = require('./controllers/user');

var news     = require('./models/news');
var newsCtrl = require('./controllers/news');

var stat     = require('./models/statistic');
var statCtrl = require('./controllers/statistic');

// API routes
var api = express.Router();

api.route('/user')  
  .get(userCtrl.findAll)
  .post(userCtrl.add);

api.route('/user/:id')  
  .get(userCtrl.findById);

api.route('/stat')  
  .post(statCtrl.add);

api.route('/stat/:id')  
  .get(statCtrl.findById);

api.route('/stat/gamescount/:user/:filter')  
  .get(statCtrl.getPlayedGamesCount);

api.route('/stat/statcount/:user/:filter')  
  .get(statCtrl.getStatCount);

api.route('/stat/statlist/:user/:filter/:stat')  
  .get(statCtrl.getStatList);

api.route('/premiumaccount/:id')  
  .get(premiumAccountCtrl.findById);

api.route('/news')  
  .get(newsCtrl.findAll)

app.use(api);  


// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});