var mysqlService = require("../services/mysqlsvc"),
    utils = require("../utils")


var create = async (req, res, next) => {
  res.status(201).send("Success");
};

var get = async (req, res, next) => {
  mysqlService.connect((err, connection, close) => {
    if (err) {
      res.status(500).send({ message: err.friendlyMessage });
    } else {
      var query = "select id, name from `group`";
      connection.query(query, function (err, result, fields) {
        close();
        if (err) {
          return next(
            Object.assign(err, {
              friendlyMessage:
                "An error has occurred while fetching groups. Please retry later.",
            })
          );
        }
        utils.handleSuccessResponse(res, result);
      });
    }
  });
};

const groupRepo = {
  create,
  get,
};

module.exports = groupRepo;
