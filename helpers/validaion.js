const joi = require("joi");

module.exports = {
    movie: joi.object().keys({
        title: joi.string().required(),
        released: joi.date().required(),
        genre: joi.string().required(),
        director: joi.string().required()
    })
}