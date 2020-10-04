const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default:()=> new Date()

    },
    exercises: [{
        type:{
            type:String,
            required: "Exercise type"
        }, 
        name:{
            type: String,
            required: "name of exercise"
        },
        duration:{
            type: Number,
            required: "duration"
        },
        weight:{
            type: Number,
        },
        reps:{
            type: Number,
        },
        sets:{
            type: Number,
        },
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;