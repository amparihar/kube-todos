// const dotenv = require("dotenv");
// dotenv.config();

var envConfig = {
  RDS_HOST: process.env.RDS_HOST,
  RDS_USERNAME: process.env.RDS_USERNAME,
  RDS_PASSWORD: process.env.RDS_PASSWORD,
  RDS_DB_NAME: process.env.RDS_DB_NAME,
  RDS_PORT: process.env.RDS_PORT
};

module.exports = envConfig;
