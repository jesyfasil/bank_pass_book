const sequelize = require("../config/connection").sequelize
const { DataTypes } = require("sequelize")
const User = require("./user").User
const Usertransaction = sequelize.define("usertransaction", {
    date: { type: DataTypes.DATE, allowNull: false, defaultValue: new Date() }, particulars: DataTypes.STRING, withdrawal: DataTypes.FLOAT, deposite: DataTypes.FLOAT,
    balance: { type: DataTypes.FLOAT, allowNull: false }
})
User.hasMany(Usertransaction)
Usertransaction.belongsTo(User)
module.exports = { Usertransaction: Usertransaction }