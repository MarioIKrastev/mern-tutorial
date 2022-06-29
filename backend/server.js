const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const app = express();
const errorHandler = require("./middleware/errorMIddleware");

const getRoutes = require("./routes/goalRoutes");

const {
  getGoals,
  postGoal,
  putGoal,
  deleteGoal,
} = require("./routes/goalRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", getRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
