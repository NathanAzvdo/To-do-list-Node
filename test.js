const Sequelize = require('sequelize');

var nomeDb= "Teste";
var user = "root";
var password = "nt28012004"

const sequelize = new Sequelize(nomeDb, user, password, {
    host:"localhost",
    dialect:'mysql'
});

sequelize.authenticate().then(function(){
    console.log("conexão realizada com sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar "+ erro);
});

const postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

const usuario = sequelize.define('usuarios', {
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
})
//usuario.sync({force:true});
//postagem.sync({force:true});