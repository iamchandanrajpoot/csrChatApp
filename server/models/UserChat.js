const { DataTypes } = require("sequelize");
const sequelize = require("../configs/db");

const UserChat = sequelize.define("UserChat", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = UserChat;
