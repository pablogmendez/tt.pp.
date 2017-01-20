var mongoose = require('mongoose');
var User  = mongoose.model('User');

//GET - Return all registers
exports.findAll = function(req, res) {
	User.find(function(err, user) {
    if(err) res.send(500, err.message);
    	console.log('GET /user')
		res.status(200).jsonp(user);
	});
};

//POST - Insert a new register
exports.add = function(req, res) {
	console.log('POST');
	console.log(req.body);
	var user = new User({
		  name: 		req.body.name,
		  addres: 		req.body.address,
		  telnumber: 	req.body.telnumber,
		  email: 		req.body.email,
		  dateofbirth: 	req.body.date,
		  user: 		req.body.user,
		  password: 	req.body.password,
		  premium: 		req.body.premium,
	});
	user.save(function(err, user) {
		if(err) return res.send(500, err.message);
    	res.status(200).jsonp(user);
	});
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
	console.log('GET /user/' + req.params.id);
	User.find({user: req.params.id}, function(err, user) {
    if(err) return res.send(500, err.message);
    console.log('GET /user/' + req.params.id);
		res.status(200).jsonp(user);
	});
};

//PUT - Update a register already exists
// exports.update = function(req, res) {
// 	User.find({user: req.params.id}, function(err, user) {
// 		  user.name: 		req.body.name,
// 		  user.addres: 		req.body.address,
// 		  user.telnumber: 	req.body.telnumber,
// 		  user.email: 		req.body.email,
// 		  user.dateofbirth: 	req.body.date,
// 		  user.user: 		req.body.user,
// 		  user.password: 	req.body.password,
// 		  user.premium: 		req.body.premium,
// 		user.save(function(err) {
// 			if(err) return res.send(500, err.message);
//       		res.status(200).jsonp(client);
// 		});
// 	});
// };