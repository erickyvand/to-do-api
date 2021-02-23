import { BAD_REQUEST } from 'http-status';
import ResponseService from '../services/response.service';

/**
 * * Handle Errors function
 * @param  {object} schema
 * @param  {object} req
 * @param  {object} res
 * @param  {object} next
 * @returns {object} object
 */
export const handleErrors = (schema, req, res, next) => {
	const { error } = schema.validate(req);

	if (error) {
		const errors = error.details.map(err => err.message);
		ResponseService.setError(BAD_REQUEST, errors);
		return ResponseService.send(res);
	}
	next();
};
