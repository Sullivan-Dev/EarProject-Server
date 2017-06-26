const Sequelize = require('Sequelize');
const User = require('./user');
const Path = require('./path');
const sequelize = require('./sequelize');

module.exports = {
  sequelize,
  User,
}