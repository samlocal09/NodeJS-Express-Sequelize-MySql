const Joi = require('joi');

exports.createPostSchema = Joi.object().keys({
    title: Joi.string()
              .required()
              .error(new Error("Title is required."))
});
