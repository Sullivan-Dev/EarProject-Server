const Sequelize = require('Sequelize');
const User = require('./user');
const sequelize = require('./sequelize');

module.exports = {
  sequelize,
  User,
}