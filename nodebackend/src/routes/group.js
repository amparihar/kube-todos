const groupRepo = require("../repo/groupRepo");

var routes = function (app, handlerfn) {
  app.route("/api/groups").get(handlerfn, groupRepo.get);
};

module.exports = routes;
