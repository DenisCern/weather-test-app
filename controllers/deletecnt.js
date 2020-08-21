const FavouritesModel = require('../models/unionDatesmdl');
const decodedata = require('../components/decodeData');
const CityModel = require('../models/citiesmdl');

class DeleteController{

    async deleteFunc(req, res) {
        const userId = decodedata(req.cookies.userId);
        await FavouritesModel.destroy({
            where: {userId: userId, cityName: req.params.cities}
        });

       const result = await FavouritesModel.findAll({
            where: {cityName: req.params.cities}
        });
        if(result.length === 0){
            await CityModel.destroy({
                where: {name: req.params.cities}
            });
        };  

        res.redirect('/favourites');
    };

}

module.exports = new DeleteController();