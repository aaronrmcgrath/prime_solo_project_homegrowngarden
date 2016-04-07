// MIDDLEWARE TO VERIFY IF USER IS AUTHENTICATED

module.exports = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.json({ err: 'User is not authenticated' });
  }
};
