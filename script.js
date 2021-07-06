/**
 * Weather App
 * 1. Complete getWeatherData() to return json response Promise
 * 2. Complete searchCity() to get user input and get data using getWeatherData()
 * 3. Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  //Using template literals to create a url with input and an API key
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  //console.log(FULL_URL);
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response) => {
      return response.json();
  })
};

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById("city-input").value;
  getWeatherData(city)
  .then((response) => {
    console.log(response);
    showWeatherData(response);
  }) .catch((error) => {
      console.log(error);
  })
};

/**
 * Show the weather data in HTML
 */
showWeatherData = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
};
