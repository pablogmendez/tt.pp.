'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var newsSchema = new Schema({
  	titulo: 		{type: String},
  	copete: 		{type: String},
    cuerpo: 		{type: String},
    link: 			{type: String}
});

newsSchema.index({ name: 1 });

module.exports = mongoose.model('News', newsSchema);