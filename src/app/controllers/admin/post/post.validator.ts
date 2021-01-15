const Joi = require('joi');

export const CreatePostSchema = Joi.object().keys({
    title: Joi.string()
              .required()
              .error(new Error("Title is required."))
});
