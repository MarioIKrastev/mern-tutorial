const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const app = express();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMIddleware");

const getRoutes = require("./routes/goalRoutes");

const {
  getGoals,
  postGoal,
  putGoal,
  deleteGoal,
} = require("./routes/goalRoutes");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", getRoutes);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
