const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");




// Get all workouts
router.get("/",workoutController.getAllWorkouts);

//Get a workout
router.get("/:workoutId",workoutController.getOneWorkout);

//Records
router.get("/:workoutId/records", recordController.getRecordForWorkout);

// Create a new workout
router.post("/",workoutController.createNewWorkout);

//Update an existing workout
router.patch("/:workoutId",workoutController.updateOneWorkout);

// Delete an existing workout

router.delete("/:workoutId",workoutController.deleteOneWorkout);

module.exports = router;