'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var statisticSchema = new Schema({
  user: 		{type: String},
  games: 		[{
  					gameid: 	{type: Number},
  					day: 		{type: Date},
  					score: 		{type: Number},
  					maxlevel: 	{type: Number}
  }]
});

statisticSchema.index({ name: 1 });

module.exports = mongoose.model('Statistic', statisticSchema);
