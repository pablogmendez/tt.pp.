var mongoose = require('mongoose');
var Statistic  = mongoose.model('Statistic');

//GET - Return a register with specified ID
exports.findById = function(req, res) {
	console.log('GET /stat/' + req.params.id);
	Statistic.find({user: req.params.id}, function(err, statistic) {
    if(err) return res.send(500, err.message);
    console.log('GET /stat/' + req.params.id);
    console.log(statistic);
		res.status(200).jsonp(statistic);
	});
};

//GET - Return a register with specified ID
exports.getPlayedGamesCount = function(req, res) {
	if(req.params.filter == "all") {
		Statistic.aggregate([
	    	{"$match":{"user":req.params.user}},{"$group" : {_id:"$stat.game", count:{$sum:1}}}
		], function(err, statistic) {
	    if(err) return res.send(500, err.message);
			res.status(200).jsonp(statistic);
		});
	} else if (req.params.filter == "finished") {
		Statistic.aggregate([
	    	{"$match":{"user":req.params.user, "stat.status" : "finished"}},{"$group" : {_id:"$stat.game", count:{$sum:1}}}
		], function(err, statistic) {
	    if(err) return res.send(500, err.message);
			res.status(200).jsonp(statistic);
		});
	} else if (req.params.filter == "started") {
		Statistic.aggregate([
	    	{"$match":{"user":req.params.user, "stat.status" : "started"}},{"$group" : {_id:"$stat.game", count:{$sum:1}}}
		], function(err, statistic) {
	    if(err) return res.send(500, err.message);
			res.status(200).jsonp(statistic);
		});
	}
};

exports.getStatCount = function(req, res) {
	Statistic.aggregate([
	   	{"$match":{"user":req.params.user}},{"$group" : {_id:"$stat.game", total:{$sum:"$stat." + req.params.filter}, count:{$sum:1}}}
	], function(err, statistic) {
	if(err) return res.send(500, err.message);
		res.status(200).jsonp(statistic);
	});
};

exports.getStatList = function(req, res) {
	if(req.params.stat == "score") {
		Statistic.find({"user":req.params.user, "stat.game":req.params.filter}, {"stat.score":1, "stat.timestamp":1,_id:0}, function(err, statistic) {
	    if(err) return res.send(500, err.message);
			res.status(200).jsonp(statistic);
		});
	} else if (req.params.stat == "winLevels") {
		Statistic.find({"user":req.params.user, "stat.game":req.params.filter}, {"stat.winLevels":1, "stat.timestamp":1,_id:0}, function(err, statistic) {
	    if(err) return res.send(500, err.message);
			res.status(200).jsonp(statistic);
		});
	} else if (req.params.stat == "loseLevels") {
		Statistic.find({"user":req.params.user, "stat.game":req.params.filter}, {"stat.loseLevels":1, "stat.timestamp":1,_id:0}, function(err, statistic) {
	    if(err) return res.send(500, err.message);
			res.status(200).jsonp(statistic);
		});
	} else if (req.params.stat == "abandonLevels") {
		Statistic.find({"user":req.params.user, "stat.game":req.params.filter}, {"stat.abandonLevels":1, "stat.timestamp":1,_id:0}, function(err, statistic) {
	    if(err) return res.send(500, err.message);
			res.status(200).jsonp(statistic);
		});
	} else if (req.params.stat == "time") {
		Statistic.find({"user":req.params.user, "stat.game":req.params.filter}, {"stat.time":1, "stat.timestamp":1,_id:0}, function(err, statistic) {
	    if(err) return res.send(500, err.message);
			res.status(200).jsonp(statistic);
		});
	} else if (req.params.stat == "stars") {
		Statistic.find({"user":req.params.user, "stat.game":req.params.filter}, {"stat.stars":1, "stat.timestamp":1,_id:0}, function(err, statistic) {
	    if(err) return res.send(500, err.message);
			res.status(200).jsonp(statistic);
		});
	}
};

//POST - Insert a new register
exports.add = function(req, res) {
	console.log('POST');
	console.log(req.body);
	var statistic = new Statistic({
		user:    req.body.user,
		stat: 	  req.body.stat
	});
	statistic.save(function(err, statistic) {
		if(err) return res.send(500, err.message);
    	res.status(200).jsonp(statistic);
	});
};