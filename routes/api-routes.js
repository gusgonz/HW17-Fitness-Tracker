const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);

    db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;