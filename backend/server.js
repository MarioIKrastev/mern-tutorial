const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();

const port = process.env.PORT;
const connectDB = require("./config/db");

const getRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");

const { errorHandler } = require("./middleware/errorMIddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", getRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);

connectDB();
app.listen(port, () => console.log(`Server started on port ${port}`));
