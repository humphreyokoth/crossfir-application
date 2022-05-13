const {v4:uuid} = require("uuid");

const Workout = require("../database/Workout")


// Get all workouts service.
const getAllWorkouts =()=>{
   // const allWorkouts = Workout.getAllWorkouts();
return DB.workouts ;
};
// Get one workout .
const getOneWorkout=()=>{
    return;
};

const createNewWorkout =(newWorkout)=>{
   const workoutTOInsert = {
       ...newWorkout,
       id:uuid(),
       createdAt:new Date().toLocaleString("en-US", { timeZone: "EAT" }),
       updatedAt:new Date().toLocaleString("en-US", { timeZone: "EAT" })
}
const createdWorkout = Workout.createNewWorkout(workoutTOInsert);
    return createdWorkout;
};

const updateOneWorkout =()=>{
    return;
};

const deleteOneWorkout =()=>{
    return;
};

module.exports ={
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};

