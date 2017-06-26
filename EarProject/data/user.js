const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

module.exports = sequelize.define('user', {
  uid: {
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  did: {
    type: Sequelize.INTEGER,
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
});