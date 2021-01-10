var responseHelper = require('../helpers/response');
var { commonMessage } = require('../utils/constant');

module.exports = function (err, req, res, next) {
    if(err) {
        let errorMessgae = err.message ? err.message : commonMessage.ERROR_PROCESSING;
        return responseHelper.errorResponse(req, res, errorMessgae, 500, err);
    }
}