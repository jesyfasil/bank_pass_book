const sequelize = require("../config/connection").sequelize
const { DataTypes } = require("sequelize")
const User = sequelize.define("user", {
    firstName: { type: DataTypes.STRING, allowNull: false }, lastName: DataTypes.STRING, userName: { type: DataTypes.STRING, allowNull: false, unique: true },
    dob: { type: DataTypes.DATEONLY, allowNull: false }, phone: { type: DataTypes.BIGINT, allowNull: false },
    address: DataTypes.STRING, password: DataTypes.STRING
})
module.exports = { User: User }