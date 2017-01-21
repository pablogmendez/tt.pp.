'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var premiumAccountSchema = new Schema({
  user: 		{type: String},
  premiumId: 	{type: Number},
});

premiumAccountSchema.index({ name: 1 });

module.exports = mongoose.model('PremiumAccount', premiumAccountSchema);
