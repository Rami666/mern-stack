require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

// Create express instance (app)
const app = express();

// middleware
app.use(express.json()); // for parsing application/json
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
app.listen(process.env.PORT, () => {
    console.log("connected to db & listening on port 4001");
  });
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
    });

