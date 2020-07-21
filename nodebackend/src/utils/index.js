(function (utils) {
  utils.handleServerError = function (err, req, res, next) {
    var serverErr = {
      message: err.message,
      error: err
    };
    console.error("server error =>", serverErr);
    res
      .status(err.status || 500)
      .send({ message: serverErr.error.friendlyMessage });
  };
})(module.exports);
