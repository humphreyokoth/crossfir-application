const express = require("express");
const router = express.Router();

// Get all workouts
router.get("/",(req,res)=>{
res.send("Get all workouts");


});

//Get a workout
router.get("/:workoutId",()=>{
res.send("Create a new workout");

});

// Create a new workout
router.post("/",(req,res)=>{
res.send("Create a new workout");

});

//Update an existing workout
router.patch("/:workoutId",(req,res)=>{
res.send("Update an existing workout");

});

// Delete an existing workout

router.delete("/:workoutId",(req,res)=>{
res.send("Delete an existing workout");

});

module.exports = router;