const { DataTypes } = require("sequelize");
const sequelize = require("../configs/db");

const Chat = sequelize.define("Chat", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isGroupChat: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    // defaultValue: false,
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Chat;
