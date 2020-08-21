const Sequelize = require("sequelize");
const sequelize = require('../components/sequelizedef');

const FavouritesModel = sequelize.define("favourites", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cityName:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = FavouritesModel;