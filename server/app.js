const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const errorHandler = require("./middlewares/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const sequelize = require("./configs/db");
// import models
const Message = require("./models/messageModel");
const User = require("./models/userModel");
const Chat = require("./models/chatModel");
const UserChat = require("./models/UserChat");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/user", userRoutes);

// error handling middleware
app.use(errorHandler);

// association between models
// message and Chat
Message.belongsTo(Chat, { foreignKey: "ChatId" });
Chat.hasMany(Message, { foreignKey: "ChatId" });

// message and user
Message.belongsTo(User, { foreignKey: "senderId" });
User.hasMany(Message, { foreignKey: "senderId" });

// user and Chat
User.belongsToMany(Chat, { through: UserChat, foreignKey: "userId" });
Chat.belongsToMany(User, { through: UserChat, foreignKey: "ChatId" });

const port = process.env.PORT || 4000;
sequelize
  .sync({ force: true })
  // .sync()
  .then(() => {
    console.log("models synced!");
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
