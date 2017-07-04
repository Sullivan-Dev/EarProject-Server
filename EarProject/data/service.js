const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

module.exports = sequelize.define('Service', {
	sid: {
		primaryKey: true,
		type: Sequelize.INTEGER,
		autoIncrement: true
	},
	uid: {
		type: Sequelize.STRING
	},
	tid: {
		type: Sequelize.STRING
	},
	status: {
		type: Sequelize.STRING
	},
	date: {
		type: Sequelize.STRING
	}, 
	start: {
		type: Sequelize.STRING
	}, 
	end: {
		type: Sequelize.STRING
	}, 
	location: {
		type: Sequelize.STRING
	}, 
	purpose: {
		type: Sequelize.STRING
	}, 
	inquiry: {
		type: Sequelize.STRING
	}, 
}, {
	tableName: 'Service',
    timestamps: true
});