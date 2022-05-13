// In src/controllers/workoutController.js
const workoutService = require("../services/workoutService");



const getAllWorkouts = (req, res) => {

  const allWorkouts = workoutService.getAllWorkouts();

    res.send({status:"OK",data:allWorkouts});
  };
  
  const getOneWorkout = (req, res) => {
    const workouts = workoutService.getOneWorkout();
    res.send("Get an existing workout");
  };
  
  const createNewWorkout = (req, res) => {


    const{body}= req;
    if(!body.name ||!body.mode ||!body.equiment|| !body.exercises || !body.trainerTips){
      return;
    };
    const newWorkout = {
      name:body.name,
      mode:body.mode,
      equiment:body.equiment,
      trainerTips:body.trainerTips
    };
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status:"OK",data:createNewWorkout});
  };
  
  const updateOneWorkout = (req, res) => {
    const  updatedWorkout = workoutService.updateOneWorkout();
    res.send("Update an existing workout");
  };
  
  const deleteOneWorkout = (req, res) => {
    const  deletedWorkout = workoutService.deleteOneWorkout();
    res.send("Delete an existing workout");
  };
  
  module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
  };