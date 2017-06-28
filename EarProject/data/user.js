const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

module.exports = sequelize.define('User', {
	uid: {
		primaryKey: true,
		type: Sequelize.INTEGER,
	},
	did: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
	},
	mdn: {
		type: Sequelize.STRING
	},
	password: {
		type: Sequelize.STRING
	},
	token: {
		type: Sequelize.STRING
	},
	name: {
		type: Sequelize.INTEGER
	},
	gender: {
		type: Sequelize.INTEGER
	}, 
}, {
	tableName: 'User',
    timestamps: true
});