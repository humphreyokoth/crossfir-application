const DB = require("./db.json");
//Change JSON data to string format to be saved in DB.
const{saveToDatabase} = require("./utils");

const getAllWorkouts = ()=>{
    return DB.workouts;
};


const createdWorkout =(newWorkout)=>{
    const isAlreadyAdded = DB.workouts.findIndex((workout)=> workout.name === newWorkout.name)>-1;
    if(isAlreadyAdded){
        return;
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
};

module.exports = { 
        getAllWorkouts,
        createdWorkout
};