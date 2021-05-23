const Movie = require("../models/Movie");
const router = require("express").Router();
const joi = require("joi");
const validation = require("../helpers/validaion");

router.get("/movies", async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.status(200).json(movies.dataValues);
    } catch (e) {
        console.error(e);
        res.status(500).json({"error": e});
    }
});

router.post("/movies", async (req, res) => {
    try {
        const data = req.body;
        const validationResult = joi.validate(data, validation.movie, {"abortEarly": false});
        if (validationResult.error) {
            res.status(400).json({validationError: validationResult.error.details});
            return;
        }
        await Movie.create({
            title: data.title,
            released: data.released,
            genre: data.genre,
            director: data.director
        });
        res.status(201).send();
    } catch (e) {
        console.error(e);
        res.status(500).json({"error": e});
    }
});

module.exports = router;