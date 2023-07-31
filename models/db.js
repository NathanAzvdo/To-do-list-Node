const Sequelize = require('sequelize');

var nomeDb = "postagens";
var user = "root";
var password = "nt28012004";


const sequelize = new Sequelize(nomeDb, user, password, {
    host: "localhost",
    dialect: 'mysql'
  });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}