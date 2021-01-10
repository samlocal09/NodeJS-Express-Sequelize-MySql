var responseHelper = require('../helpers/response');
var { errorMessage } = require('../utils/constant');

module.exports = function(schema){
    return (req, res, next) => {
      const { error } = schema.validate(req.body, { abortEarly: false, allowUnknown: true });
      const valid = error == null;
      if (valid) {
        next();
      } else {
        let message = error ? `${errorMessage.VALIDATION_ERROR}. ${error.message}` : errorMessage.VALIDATION_ERROR;
        return responseHelper.errorResponse(req, res, message, 400);
      }
    }
}