const Sequelize = require("sequelize");

const sequelize = new Sequelize("hitech_db", "username", "password", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
