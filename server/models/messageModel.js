const { DataTypes } = require("sequelize");
const sequelize = require("../configs/db");

const Message = sequelize.define("Message", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.STRING,
  },
  attachments: {
    type: DataTypes.JSON,
  },
});

module.exports = Message;
