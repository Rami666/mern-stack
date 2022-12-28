const express = require("express");
const { createWorkout, getWorkout, getWorkouts } = require("../controllers/workoutControllers");



const router = express.Router();

// Get all workouts
router.get("/", getWorkouts);

// Get one workout
router.get("/:id", getWorkout);

// Post a new workout
router.post("/", createWorkout);

// Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ message: `DELETE a workout from the workouts route with id` });
});

// Update a workout
router.patch("/:id", (req, res) => {
  res.json({ message: `PATCH a workout from the workouts route with id` });
});
module.exports = router;
