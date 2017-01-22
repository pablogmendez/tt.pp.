var mongoose = require('mongoose');
var News  = mongoose.model('News');

//GET - Return all registers
exports.findAll = function(req, res) {
	News.find(function(err, news) {
    if(err) res.send(500, err.message);
    	console.log('GET /clients')
		res.status(200).jsonp(news);
	});
};
