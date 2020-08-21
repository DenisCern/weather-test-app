const deleteLocation = require('../components/deleteLocation');
const FavouritesModel = require('../models/unionDatesmdl');
const getWeather = require('../components/getWeather');
const decodedata = require('../components/decodeData');

class RegistrationController {

    async getFavouritePage(req, res) {
        deleteLocation();
        if (!req.cookies.userId) {
            res.redirect('/');            
        };
        const result = decodedata(req.cookies.userId);

        const Cities = await FavouritesModel.findAll({ where: { userId: result } });
        const CitiesArr = [];

        for (const item of Cities) {
            const weatherAunswer = await getWeather(item.dataValues.cityName);
            CitiesArr.push(weatherAunswer);
        }
        res.render('favourites', {cities: CitiesArr});

    };
    
}

module.exports = new RegistrationController();