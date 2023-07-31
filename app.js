const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const hbs = handlebars.create({
  allowProtoProperties: true,
  allowProtoMethods: true,
});

const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const Post = require('./models/Post');
const routes = require('./routes'); // Importe as rotas do arquivo "routes.js"

// template engine
app.engine('handlebars', handlebars.engine({
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  }
}));
app.set('view engine', 'handlebars');

// bodyParser
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// usar rotas
app.use('/', routes);

// express
app.use(express.static('public'));
app.listen(8081, function () {
  console.log("Servidor rodando");
});
