require('dotenv').config()
const Sequelize=require("sequelize")
const sequelize=new Sequelize("bank_stmt",process.env.DB_USER,DB_PASS,{host:DB_HOST,dialect:"mysql"})
module.exports={sequelize:sequelize}