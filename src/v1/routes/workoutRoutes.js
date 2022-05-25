const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");




// Get all workouts
router.get("/",workoutController.getAllWorkouts);

//Get a workout
router.get("/:workoutId",workoutController.getOneWorkout);

//Records
//router.get("/:workoutId/records", recordController.getRecordForWorkout);

// Create a new workout
router.post("/",workoutController.createNewWorkout);

//Update an existing workout
router.patch("/:workoutId",workoutController.updateOneWorkout);

// Delete an existing workout

router.delete("/:workoutId",workoutController.deleteOneWorkout);



/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get("/", cache("2 minutes"),  workoutController.getAllWorkouts);

module.exports = router;