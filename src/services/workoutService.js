const Workout = require("../database/Workout")


// Get all workouts service.
const getAllWorkouts =()=>{
    const allWorkouts = Workout.getAllWorkouts();
return allWorkouts  ;
};
// Get one workout .
const getOneWorkout=()=>{
    return;
};

const createNewWorkout =()=>{
    return;
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

