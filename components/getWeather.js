const axios = require("axios");

const getWeather = async (city) => {
  const key = ""; //your key from openWeather
  const cityName = city;
  const CityCard = {
    name: "",
    country: "",
    temp: "",
    tempFeel: "",
    state: "",
    windSpeed: "",
    sunrise: "",
    sunset: "",
    status: 0,
  };
  let answer;

  try {
    answer = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&appid=" +
        key +
        "&units=metric"
    );

    CityCard.name = answer.data.name;
    CityCard.country = answer.data.sys.country;
    CityCard.temp = Math.round(answer.data.main.temp);
    CityCard.tempFeel = Math.round(answer.data.main.feels_like);
    CityCard.state = answer.data.weather[0].description;
    CityCard.status = answer.status;
  } catch (error) {
    return error;
  }
  return CityCard;
};

module.exports = getWeather;
