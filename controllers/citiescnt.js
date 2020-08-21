const deleteLocation = require('../components/deleteLocation');
const addToFavourites = require('../components/addToFavourites');
const createACityInDb = require('../components/createACityInDb');
const checkString = require('../components/checkString');
const getWeather = require('../components/getWeather');
const decodedata = require('../components/decodeData');

class CitiesController {
    async getCity(req, res) {
        deleteLocation();
        if (req.cookies.userId) {
            res.render('cities');
        } else res.redirect('/');
    };

    async postCity(req, res) {
        if (!req.body.city && req.body.cities === undefined) return res.redirect("/cities");
        
        let LocalStorage = require('node-localstorage').LocalStorage;
        let localStorage = new LocalStorage('./scratch');

        if (req.body.cities) {        
            let citiesArr = [];
            const userId = decodedata(req.cookies.userId);

            if (typeof req.body.cities === 'string') {
                citiesArr.push(req.body.cities);
            } else {
                citiesArr = req.body.cities;
            };
            
            await createACityInDb(citiesArr);
            await addToFavourites(citiesArr, userId);

            const items = JSON.parse(localStorage.getItem('cities'));
            return res.render('cities', {cities: items,showButton: true});
        };

        const weatherAunswer = await getWeather(req.body.city);
        if(weatherAunswer.status === 200){
                const Arr = [];
                const cityMdl = {
                    name: weatherAunswer.name,
                    temp: weatherAunswer.temp
                };

                Arr.push(cityMdl);
                let items = localStorage.getItem('cities');
                if (items === null) {
                    localStorage.setItem('cities', JSON.stringify(Arr));
                } else {
                    items = JSON.parse(localStorage.getItem('cities'));
                    const result = checkString(weatherAunswer.name, items);
                    if (result === true) return res.render("cities", {cities: items,showButton: true});
                    items.map(e => (Arr.push(e)));
                    localStorage.setItem('cities', JSON.stringify(Arr));
                }

                res.render("cities", {
                    cities: Arr,
                    showButton: true
                });
            }else{
                if (weatherAunswer.response.status === 404){
                    let items = JSON.parse(localStorage.getItem('cities'));
                    res.render("cities", {
                        error: true,
                        cities: items,
                        showButton: true
                    });
                }else {
                    console.log('ERROR: ' ,weatherAunswer);
                };
            };
    };
}

module.exports = new CitiesController();