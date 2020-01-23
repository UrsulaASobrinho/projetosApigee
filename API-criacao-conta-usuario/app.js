import express from "express";
import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import Cryptr from "cryptr";

//padrao antigo do java scripts
//var express = require('express');
//var path = require('path');
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import AccountModel from "./model/accountModel";
import dataAccount from "./data/account.json";

//var app = express();
const app = express();
mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify :  false

  });
const db = mongoose.connection;
db.on('error', console.error.bind(console, "erro de concetion"));

//sifrando  da sneha passoword
let securePass = new Cryptr("aes256");
let password = securePass.encrypt(dataAccount.password);
dataAccount.password = password;

let account = new AccountModel(dataAccount);


//roda
account.save(err=>{
    if(err){
        console.error("Erro:" + err);
    }else{
        console.log("Conta teste@test.com criada com sucesso");
    }
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//module.exports = app;
export default app;
