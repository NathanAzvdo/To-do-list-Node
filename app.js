const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const hbs = handlebars.create();

const Sequelize = require('sequelize');

var nomeDb = "Teste";
var user = "root";
var password = "nt28012004";
// config
// template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// cnx banco de dados
const sequelize = new Sequelize(nomeDb, user, password, {
  host: "localhost",
  dialect: 'mysql'
});

// rotas
app.get('/form', function (req, res) {
  res.render('form');
});

// express
app.listen(8081, function () {
  console.log("Servidor rodando na url http://localhost:8081");
});
