import Joi from "joi";

export const UserValidation = Joi.object({
  username: Joi.string().email().min(6).max(255).required(),
  name: Joi.string().required(),
  surname: Joi.string().required(),
});

export const UserIdValidation = Joi.string().alphanum().required();

export const UsersValidation = Joi.object({
  sort: Joi.string().required().valid("post"),
  order: Joi.string().required().valid("desc"),
  pageSize: Joi.number().positive().required(),
});
