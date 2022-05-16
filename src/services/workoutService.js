const {v4:uuid} = require("uuid");

const Workout = require("../database/Workout")


// Get all workouts service.
const getAllWorkouts =()=>{
    const allWorkouts = Workout.getAllWorkouts();
return allWorkouts ;
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
    try{
 const createdWorkout = Workout.createNewWorkout(workoutTOInsert);
    return createdWorkout;
    }catch(error){
     throw error;
    }
};

const updateOneWorkout =(workoutId,changes)=>{
   const updatedWorkout =Workout.updateOneWorkout(workoutId,changes);
    return updatedWorkout;
};

const deleteOneWorkout =(workoutId)=>{
    Workout.deleteOneWorkout(workoutId);
};

module.exports ={
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};

