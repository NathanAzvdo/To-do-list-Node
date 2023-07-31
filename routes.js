const express = require('express');
const router = express.Router();
const Post = require('./models/Post');

router.get('/form', function (req, res) {
  res.render('form');
});

router.get('/', function (req, res) {
  Post.findAll().then(function (posts) {
    res.render('home', {posts: posts});
    console.log(posts);
  }).catch(function(erro){
    res.send('Erro: '+ erro);
  });
});

router.post('/add', function (req, res) {
  Post.create({
    titulo: req.body.title,
    conteudo: req.body.conteudo
  }).then(function () {
    Post.findAll().then(function (posts) {
      res.redirect('/');
    }).catch(function (error) {
      res.send('erro' + error);
    });
  }).catch(function (erro) {
    res.send('erro' + erro)
  })

});

router.get('/deletar/:id', function (req, res) {
  Post.destroy({ where: { 'id': req.params.id } }).then(function () {
    res.redirect('/');
  }).catch(function (erro) {
    console.log(erro);
  })
});

module.exports = router;
