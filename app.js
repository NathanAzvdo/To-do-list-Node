const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const hbs = handlebars.create({
  allowProtoProperties: true,
  allowProtoMethods: true,
});

const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const Post = require('./models/Post')

  // template engine
  app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,

        allowProtoMethodsByDefault: true,
    }
  }));
app.set('view engine', 'handlebars');
  //bodyParser
  app.use(bodyParser.urlencoded({
    extended:false
  }));
  app.use(bodyParser.json());

  // rotas 
  app.get('/form', function (req, res) {
    res.render('form');
  });
  
  app.get('/', function(req, res){
   Post.findAll().then(function(posts){
    res.render('home', {posts: posts})
    console.log(posts)
   });
  });

  app.post('/add', function (req, res) {
    Post.create({
      titulo:req.body.title,
      conteudo:req.body.conteudo
    }).then(function(){
      Post.findAll().then(function(posts){
        res.render('home', {posts:posts});
      }).catch(function(error){
        res.send('erro' + error);
      });
    }).catch(function(){
    res.send('erro'+erro)})
    
  });
  // express
  
  app.use(express.static('public'));
  app.listen(8081, function () {
    console.log("Servidor rodando");
  });
