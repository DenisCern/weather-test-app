const FavouritesModel = require('../models/unionDatesmdl');

const checkCity = async (city,id) => {
        
        const result =  await FavouritesModel.findAll({
            where: {userId: id, cityName: city}
        });

        return result;
    }

    module.exports = checkCity;