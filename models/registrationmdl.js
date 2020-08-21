const Sequelize = require("sequelize");
const sequelize = require('../components/sequelizedef');
const FavouritesModel =require('../models/unionDatesmdl');

const User = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// User.belongsToMany(User, {through: FavouritesModel, as: 'Parents', foreignKey: 'parentId' });

module.exports = User;