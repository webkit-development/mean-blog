const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('./../utils/errorResponse');
const User = require('./../models/user');


exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } //else if(req.cookies.token) {
  //   token = req.cookies.token;
  // }

  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
  try {
    const decoded = jwt.verify(token, 'sldkhjdlksjlsjclskjxlskxcjskldjlskjdsalsh;sd292uu32929322u39');
    console.log(decoded);
    req.user = await User.findById(decoded.id);
    next();
  } catch (e) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
});
