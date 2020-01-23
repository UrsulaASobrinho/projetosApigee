var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//primeira coisa que vamos fazer aqui
// importa o mongo
//passar a variavel fornecida pelo heroku ao criar o db
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
//segunda coisa é fazer a concexao
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexao'));
//terceira importa o modelo que criamos
var UsuarioModelo = require("./UsuarioModelo");



var app = express();
//criar um objeto
var usuario = new UsuarioModelo({
    nome: 'Ursula'
});
usuario.save(err=>{
    if(err){
        console.error("Erro ao criar o usuario");
    }else{
        console.log("Usuario criado com sucesso");
    }
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
