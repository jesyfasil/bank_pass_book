//require('dotenv').config()
const Sequelize=require("sequelize")
const sequelize=new Sequelize("bank_stmt",'root','password',{host:'localhost',dialect:"mysql"})
module.exports={sequelize:sequelize}