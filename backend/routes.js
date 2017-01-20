'use strict';

exports = module.exports = function(app) {
	app.post('/login', require('./api/student').login);
	app.get('/courses', require('./api/course').getAll);
	app.get('/courses/:id', require('./api/course').findById);
	app.get('/courses/:year/:term', require('./api/course').findByTerm);
	app.put('/course/:id/students', require('./api/course').addNewStudent);
};
