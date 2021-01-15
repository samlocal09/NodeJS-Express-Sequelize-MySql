import * as express from 'express';
const app = express();

export const successResponse = (req, res, data, code = 200) => {
    return res.send({
        code,
        isSuccess: true,
        data: data
    })
}

export const errorResponse = (req, res, message = "There is an error processing", code = 500, error = {}) => {
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