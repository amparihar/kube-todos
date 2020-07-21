var mysqlService = require("../services/mysqlsvc");

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
        if (err) {
          next(
            Object.assign(err, {
              friendlyMessage:
                "An error has occurred while fetching groups. Please retry later.",
            })
          );
        }
        res.status(200).send(result);
      });
    }
    close();
  });
};

const groupRepo = {
  create,
  get,
};

module.exports = groupRepo;
