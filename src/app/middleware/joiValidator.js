var responseHelper = require('../helpers/response');
var { MSG_ERROR } = require('../utils/constant').MESSAGE;

module.exports = function(schema){
    return (req, res, next) => {
      const { error } = schema.validate(req.body, { abortEarly: false, allowUnknown: true });
      const valid = error == null;
      if (valid) {
        next();
      } else {
        let message = error ? `${MSG_ERROR.VALIDATION_ERROR}. ${error.message}` : MSG_ERROR.VALIDATION_ERROR;
        return responseHelper.errorResponse(req, res, message, 400);
      }
    }
}