function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

/* eslint-disable no-unused-vars */
function errorHandler(error, req, res, next) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  let returnData = {
    status: false,
    message: error.message
  };
  if (!(process.env.NODE_ENV === 'production')) {
    returnData.stack = error.stack;
  }
  res
    .status(statusCode)
    .json({
      returnData
    });
}

module.exports = {
  notFound,
  errorHandler,
};
