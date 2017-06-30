const Sequelize = require('Sequelize');
const User = require('./user');
const District = require('./district');
const sequelize = require('./sequelize');

module.exports = {
  sequelize,
  User,
  District,
}