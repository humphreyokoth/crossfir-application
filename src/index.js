const express = require("express");
const bodyParser = require("body-parser");
const  v1WorkoutRouter =require("./v1/routes/workoutRoutes")



const app = express();

const PORT = process.env.PORT || 4000;


// Middleware
app.use(bodyParser.json());
app.use("/api/v1/workouts",v1WorkoutRouter);


app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`);

});