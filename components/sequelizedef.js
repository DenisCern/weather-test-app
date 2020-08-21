const Sequelize = require("sequelize");

const sequelize = new Sequelize("weather-db", "root", "root", {
    dialect: "mysql",
    host: "localhost",
    port: "3306",
    logging: false
});

module.exports = sequelize;