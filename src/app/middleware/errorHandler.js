require('winston-daily-rotate-file');
var { errorResponse } = require('../helpers/response');
var { MSG_COMMON } = require('../utils/constant').MESSAGE;
var { transports, createLogger, format } = require('winston');

// Logger configuration
const myFormat = format.printf(({ level, message, label, timestamp }) => {
    console.log(JSON.stringify(message));
    return `{"timestamp": "${timestamp}", "level": "${level}", "message": ${JSON.stringify(message)} }`;
})

const winstonLogConfig = {
    format: format.combine(
        format.timestamp(),
        format.json(),
        myFormat
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

module.exports = function (err, req, res, next) {
    if(err) {
        // Create the logger
        var logger = createLogger(winstonLogConfig);

        // Log a message
        logger.error({
            message: { 
                endpoint: req.originalUrl,
                detail: err.errors[0].message 
            }
        });
        
        let errorMessgae = err.message ? err.message : MSG_COMMON.ERROR_PROCESSING;
        return errorResponse(req, res, errorMessgae, 500, err.errors[0].message);
    }
}