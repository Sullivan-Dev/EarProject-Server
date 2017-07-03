const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

module.exports = sequelize.define('Translator', {
	tid: {
		primaryKey: true,
		type: Sequelize.INTEGER,
		autoIncrement: true
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
	name: {
		type: Sequelize.STRING
	},
	gender: {
		type: Sequelize.STRING
	}, 
}, {
	tableName: 'Translator',
    timestamps: true
});