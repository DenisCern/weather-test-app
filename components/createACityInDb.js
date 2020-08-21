const CityModel = require('../models/citiesmdl');
const User = require('../models/registrationmdl');

const createACityInDb = async (cities) => {

    await CityModel.sync({ alter: true });

    cities.map(async(city) => {
        try {
            await CityModel.create({ name: city })   
        } catch (error) {};
    });

}

module.exports = createACityInDb;