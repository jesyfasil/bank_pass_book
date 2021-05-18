require('dotenv').config()
const Sequelize=require("sequelize")
const sequelize=new Sequelize("bank_stmt",process.env.DB_USER,process.env.DB_PASS,{host:process.env.DB_HOST,dialect:"mysql"})
module.exports={sequelize:sequelize}