module.exports.routes = function (app, handlerfn) {
    app.route("/api/users").get(handlerfn, function (req, res) {
      
    });
  };
  