import express from "express";
import accountModel from "./model/accountModel";
import Cryptr from "cryptr";
import jwt from "jsonwebtoken"; //verifica se o token esta correto

const accountRouter = express.Router();

let securePass = new Cryptr("aes256");
