'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
  name: 		{type: String},
  addres: 		{type: String},
  telnumber: 	{type: String},
  email: 		{type: String},
  dateofbirth: 	{type: Date},
  user: 		{type: String},
  password: 	{type: String},
  premium: 		{type: Boolean},
  avatar: 		{data: Buffer, contentType: String}
});

userSchema.index({ name: 1 });

module.exports = mongoose.model('User', userSchema);
