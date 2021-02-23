import Joi from 'joi';
import { handleErrors } from '../utils';

/**
 * * Validate To do body
 * @param  {object} req
 * @param  {object} res
 * @param  {object} next
 * @returns {object} object
 */
export const validateTodoBody = (req, res, next) => {
	const schema = Joi.object({
		title: Joi.string().trim().required().messages({
			'any.required': 'Title is required',
			'string.empty': 'Title is not allowed to be empty',
		}),
		description: Joi.string().required('').allow('').messages({
			'any.required': 'Description is required',
		}),
		priority: Joi.string().required().valid('LOW', 'MEDIUM', 'HIGH').messages({
			'any.required': 'Priority is required',
			'string.empty': 'Priority is not allowed to be empty',
			'any.only': 'Priority must be one of [LOW, MEDIUM, HIGH]',
		}),
	}).options({ abortEarly: false });

	return handleErrors(schema, req.body, res, next);
};
