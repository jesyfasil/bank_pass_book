const sequelize = require("../config/connection").sequelize
const { DataTypes } = require("sequelize")
const User = require("./user").User
const Session = sequelize.define("session", { sessionid: { type: DataTypes.STRING, allowNull: false } })
User.hasOne(Session)
Session.belongsTo(User)
module.exports = { Session: Session }
