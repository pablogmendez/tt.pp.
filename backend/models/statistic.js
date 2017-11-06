'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var statisticSchema = new Schema({
  user: 		{type: String},
  stat: 		{
  					score: 	{type: Number},
  					winLevels: 		{type: Number},
  					loseLevels: 		{type: Number},
  					abandonLevels: 	{type: Number},
  					time: 	{type: Number},
  					stars: 	{type: Number},
  					timestamp: 	{type: String},
  					status: 	{type: String},
  					game: 	{type: String}
  				}
});

statisticSchema.index({ user: 1 });

module.exports = mongoose.model('Statistic', statisticSchema);
