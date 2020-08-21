const Sequelize = require("sequelize");
const sequelize = require('../components/sequelizedef');
const FavouritesModel =require('../models/unionDatesmdl');

const City = sequelize.define("cities", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

// City.belongsToMany(City, {through: FavouritesModel, as: 'Siblings', foreignKey: 'siblingName' });

module.exports = City;