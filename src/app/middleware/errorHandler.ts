import { errorResponse } from '../helpers/response';
import { COMMON_MESSAGE } from '../utils/constant';
import { transports, createLogger, format } from 'winston';
import * as moment from 'moment';

// Logger configuration
const winstonLogConfig = {
    level: 'error',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    'transports' : [
        new transports.File({
            level: 'info',
            filename: './assets/logs/test-winston.log'
        })
    ]
};

export function errorHandler(err, req, res, next) {
    if(err) {
        // Create the logger
        var logger = createLogger(winstonLogConfig);

        // Log a message
        logger.error(err);

        let errorMessgae = err.message ? err.message : COMMON_MESSAGE.ERROR_PROCESSING;
        return errorResponse(req, res, errorMessgae, 500, err);
    }
}
