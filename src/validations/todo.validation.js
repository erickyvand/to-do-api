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

/**
 * * Validate To do parameter
 * @param  {object} req
 * @param  {object} res
 * @param  {object} next
 * @returns {object} object
 */
export const validateTodoParam = (req, res, next) => {
	const schema = Joi.object({
		todoId: Joi.string()
			.regex(/^[0-9]{1,}$/)
			.messages({
				'string.pattern.base': 'Id must be a number',
			}),
	}).options({ abortEarly: false });

	return handleErrors(schema, req.params, res, next);
};

/**
 * * Validate To do body in update request
 * @param  {object} req
 * @param  {object} res
 * @param  {object} next
 * @returns {object} object
 */
export const validateUpdateTodoBody = (req, res, next) => {
	const schema = Joi.object({
		title: Joi.string().optional().trim().messages({
			'string.empty': 'Title is not allowed to be empty',
		}),
		description: Joi.string().optional().allow(''),
		priority: Joi.string().optional().valid('LOW', 'MEDIUM', 'HIGH').messages({
			'string.empty': 'Priority is not allowed to be empty',
			'any.only': 'Priority must be one of [LOW, MEDIUM, HIGH]',
		}),
	}).options({ abortEarly: false });

	return handleErrors(schema, req.body, res, next);
};
