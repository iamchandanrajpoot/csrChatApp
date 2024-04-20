const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const errorHandler = require("./middlewares/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const sequelize = require("./configs/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/user", userRoutes);

// error handling middleware
app.use(errorHandler);

const port = process.env.PORT || 4000;
sequelize
  .sync()
  .then(() => {
    console.log("models synced!");
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
