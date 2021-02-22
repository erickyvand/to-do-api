import Joi from 'joi';
import { handleErrors } from '../utils';

/**
 * * Validate signup body
 * @param  {object} req
 * @param  {object} res
 * @param  {object} next
 * @returns {object} object
 */
export const validateSignupBody = (req, res, next) => {
	const schema = Joi.object({
		firstName: Joi.string().trim().min(2).required().messages({
			'any.required': 'First Name is required',
			'string.empty': 'First Name is not allowed to be empty',
			'string.min': 'First Name length must be at least 2 characters long',
		}),
		lastName: Joi.string().trim().min(2).required().messages({
			'any.required': 'Last Name is required',
			'string.empty': 'Last Name is not allowed to be empty',
			'string.min': 'Last Name length must be at least 2 characters long',
		}),
		email: Joi.string().email().required().messages({
			'any.required': 'Email is required',
			'string.empty': 'Email is not allowed to be empty',
			'string.email': 'Email must be a valid email',
		}),
		password: Joi.string().trim().min(6).required().messages({
			'any.required': 'Password is required',
			'string.empty': 'Password is not allowed to be empty',
			'string.min': 'Password length must be at least 6 characters long',
		}),
		confirmPassword: Joi.string()
			.required()
			.valid(Joi.ref('password'))
			.messages({
				'any.required': 'Confirm Password is required',
				'any.only': 'Passwords must match',
				'string.empty': 'Confirm Password is not allowed to be empty',
			}),
	}).options({ abortEarly: false });

	handleErrors(schema, req.body, res, next);
};

/**
 * * Validate login body
 * @param  {object} req
 * @param  {object} res
 * @param  {object} next
 * @returns {object} object
 */
export const validateLoginBody = (req, res, next) => {
	const schema = Joi.object({
		email: Joi.string().email().required().messages({
			'any.required': 'Email is required',
			'string.empty': 'Email is not allowed to be empty',
			'string.email': 'Email must be a valid email',
		}),
		password: Joi.string().trim().required().messages({
			'any.required': 'Password is required',
			'string.empty': 'Password is not allowed to be empty',
		}),
	}).options({ abortEarly: false });

	handleErrors(schema, req.body, res, next);
};
