import { errorResponse } from '../helpers/response';
import { COMMON_MESSAGE } from '../utils/constant';
import { transports, createLogger, format } from 'winston';
import 'winston-daily-rotate-file'

// Logger configuration
const winstonLogConfig = {
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    'transports' : [
        new transports.DailyRotateFile ({
            filename: './assets/logs/api.%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            level: 'error',
            maxSize: 5242880, //5MB
            maxFiles: 5
        })
    ]
};

export function errorHandler(err, req, res, next) {
    if(err) {
        // Create the logger
        var logger = createLogger(winstonLogConfig);

        // Log a message
        logger.error({ 
            endpoint: req.originalUrl,
            detail: err.errors[0].message 
        });
        
        let errorMessgae = err.message ? err.message : COMMON_MESSAGE.ERROR_PROCESSING;
        return errorResponse(req, res, errorMessgae, 500, err.errors[0].message);
    }
}
