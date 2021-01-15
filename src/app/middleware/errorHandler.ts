import { errorResponse } from './../helpers/response';
import { COMMON_MESSAGE } from '../utils/constant';

export function errorHandler(err, req, res, next) {
    if(err) {
        let errorMessgae = err.message ? err.message : COMMON_MESSAGE.ERROR_PROCESSING;
        return errorResponse(req, res, errorMessgae, 500, err);
    }
}
