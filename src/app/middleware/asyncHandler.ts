// export const requestHandler = async (req, res, next) => {
//     try {
//         await requestHandler(req, res, next);
//     } catch (error) {
//         //Error Handler Middleware will be proceesed when the "next(error)" is called
//         next(error);
//     }
// };

import * as expressAsyncHandler from 'express-async-handler'

const asyncHandler = expressAsyncHandler

export default asyncHandler