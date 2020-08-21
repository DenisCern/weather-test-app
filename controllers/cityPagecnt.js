const getWeatherforCityPage = require('../components/getWeatherForCityPage');
const moment = require('moment');
const checkCity = require('../components/checkCity');
const decodedata = require('../components/decodeData');

class CityPageController {

    async postCity(req, res) {
        let cityName;
        if(req.body.cities === undefined){
            const userId = decodedata(req.cookies.userId);
            cityName = req.params.cities;
            const result = await checkCity(cityName,userId);
            if(result.length === 0) return res.redirect('/');
        }else cityName = req.body.cities;

        const weather = await getWeatherforCityPage(cityName);
        
        const weatherArr = [];
        const tfirst = {
            day: moment(weather.data.list[0].dt_txt).format('MMMM Do YYYY'),
            hours: moment(weather.data.list[0].dt_txt).format('h')
        }; 

        const firstItem = {
            date: tfirst.day,
            pod: (weather.data.list[0].sys.pod === 'd' ? 'Day' : 'Night'),
            temp: Math.round(weather.data.list[0].main.temp),
            feels: Math.round(weather.data.list[0].main.feels_like),
            weatherMain: weather.data.list[0].weather[0].main, 
            weatherDescription: weather.data.list[0].weather[0].description,
            wind: weather.data.list[0].wind.speed,
            secondItem:''
        };

        (firstItem.pod === 'Day') ? tfirst.hours += ' am' : tfirst.hours += ' pm';

        weatherArr.push(firstItem);
        for (let index = 1; index < weather.data.list.length; index++) {
            const element = weather.data.list[index];
            const t = {
                day: moment(element.dt_txt).format('MMMM Do YYYY'),
                hours: moment(element.dt_txt).format('h')
            }; 
            const item = {
                date: t.day,
                pod: (element.sys.pod === 'd' ? 'Day' : 'Night'),
                temp: Math.round(element.main.temp),
                feels: Math.round(element.main.feels_like),
                weatherMain: element.weather[0].main, 
                weatherDescription: element.weather[0].description,
                wind: element.wind.speed,
                secondItem:''
            };

            (item.pod === 'Day') ? t.hours += ' am' : t.hours += ' pm';

            if (t.hours === '9 am') { 
                if(item.date !== firstItem.date){
                    weatherArr.push(item);
                }               
            } else if (t.hours === '9 pm') {
                weatherArr.push(item);
            };
        };
      
        let date ='';
        let index = 0;
        weatherArr.map(item => {
            if(date === item.date){
                weatherArr[index-1].secondItem = item;
            };          
            date = item.date;
            index += 1;
        });
        
        const arr = weatherArr.filter(item => item.secondItem !== '');

        if(arr.length !== 5){
            arr.unshift(weatherArr[0]);
        };

        res.render('cityPage', {
            cityname: cityName,
            weather: arr
        });
    };

}

module.exports = new CityPageController();