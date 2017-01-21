var mongoose = require('mongoose');
var PremiumAccount  = mongoose.model('PremiumAccount');

//GET - Return a register with specified ID
exports.findById = function(req, res) {
	PremiumAccount.find({user: req.params.id}, function(err, premiumaccount) {
	    if(err) return res.send(500, err.message);
		console.log('GET /premiumaccount/' + req.params.id);
		console.log(premiumaccount);
		res.status(200).jsonp(premiumaccount);
	});
};