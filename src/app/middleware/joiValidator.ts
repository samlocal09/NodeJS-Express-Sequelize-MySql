import { errorResponse } from './../helpers/response';
import { ERROR_MESSAGE } from '../utils/constant';

export const JoiValidator = (schema) => {
    return (req, res, next) => {
      const { error } = schema.validate(req.body, { abortEarly: false, allowUnknown: true });
      const valid = error == null;
      if (valid) {
        next();
      } else {
        let message = error ? `${ERROR_MESSAGE.VALIDATION_ERROR}. ${error.message}` : ERROR_MESSAGE.VALIDATION_ERROR;
        return errorResponse(req, res, message, 400);
      }
    }
}