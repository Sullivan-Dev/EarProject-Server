const Sequelize = require('Sequelize');
const User = require('./user');
const Translator = require('./translator');
const District = require('./district');
const Service = require('./service');
const sequelize = require('./sequelize');

module.exports = {
  sequelize,
  User,
  Translator,
  District,
  Service,
}