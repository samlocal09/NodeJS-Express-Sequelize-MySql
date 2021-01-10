var express = require('express');
var app = express();

module.exports = {
    baseResult: function(isSuccess, message = '', data) {
        return { isSuccess, message, data }
    },

    successResponse: function(req, res, data, code = 200) {
        return res.send({
            code,
            isSuccess: true,
            data: data
        })
    },
    
    errorResponse: function(req, res, message = "There is an error processing", code = 500, error = {}) {
        let envMode = app.get('env') ? app.get('env').trim().toLocaleLowerCase() : 'development';
        error = envMode === 'development' ? error : {};

        return res.send({
            code,
            isSuccess: false,
            message,
            error,
            data: null
        })
    } 
}
