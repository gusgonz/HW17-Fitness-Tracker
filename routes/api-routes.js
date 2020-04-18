const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            // console.log(dbWorkout);
            res.status(200).json(dbWorkout)
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);

    db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } })
        .then(result => {
            // console.log(result);
            res.status(400).json(result);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then(workout => {
            // console.log(workout);
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;