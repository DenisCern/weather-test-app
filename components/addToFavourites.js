const FavouritesModel = require('../models/unionDatesmdl');

const addToFavourites = async (cities, userId) => {
    
    await FavouritesModel.sync({ alter: true });

    cities.map(async(city) => {
        try {
            const isFinded = await FavouritesModel.findAll({ where:{userId: userId, cityName: city}});
            if (isFinded.length === 0) await  FavouritesModel.create({ userId: userId, cityName: city});   
        } catch (error) {};
    });

}

module.exports = addToFavourites;
