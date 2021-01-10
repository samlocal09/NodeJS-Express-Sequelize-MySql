module.exports = func => async (req, res, next) => {
    try {
        await func(req, res, next);
    } catch (error) {
        //Error Handler Middleware will be proceesed when the "next(error)" is called
        next(error);
    }
};