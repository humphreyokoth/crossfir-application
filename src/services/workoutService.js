const {v4:uuid} = require("uuid");
const Workout = require("../database/Workout");


// Get all workouts service.
const getAllWorkouts =()=>{
try{
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts ;
}catch(error){
    throw error;
}
};

// Get one workout .
const getOneWorkout=(workoutId)=>{
   try{
const workout = Workout.getOneWorkout(workoutId);
return workout;
   }catch(error){
throw error
   }
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
   try{
    const updatedWorkout =Workout.updateOneWorkout(workoutId,changes);
    return updatedWorkout;
   }catch(error){
    throw error;
   }
    
};

const deleteOneWorkout =(workoutId)=>{
   try {
    Workout.deleteOneWorkout(workoutId); 
   } catch (error) {
       throw error;
   }
   
   
};

module.exports ={
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};

