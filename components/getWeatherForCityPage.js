const axios = require("axios");

const getWeatherforCityPage = async (city) => {
  const key = ""; //your key from openWeather
  const cityName = city;
  let answer;

  try {
    answer = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        cityName +
        "&appid=" +
        key +
        "&units=metric"
    );
  } catch (error) {
    return error;
  }
  return answer;
};

module.exports = getWeatherforCityPage;
