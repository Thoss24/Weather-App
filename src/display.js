import weather from "./weather";

const display = (() => {

    function displayWeather(data) {

        const searchCity = document.getElementById('search-city');
        const cityName = document.getElementById('city-name-area');
        const temp = document.getElementById('temp');
        const humidity = document.getElementById('humidity');
        const minTemp = document.getElementById('min-temp');
        const maxTemp = document.getElementById('max-temp');
        const feelsLike = document.getElementById('feels-like');

        cityName.innerHTML = searchCity.value.charAt(0).toUpperCase() + searchCity.value.slice(1)
        temp.innerHTML = `Temperature: ${data.temp} &#8451;`;
        humidity.innerHTML = `Humidity: ${data.humidity} %`;
        minTemp.innerHTML = `Min-temp: ${data.temp_min} &#8451;`;
        maxTemp.innerHTML = `Max-temp: ${data.temp_max} &#8451;`;
        feelsLike.innerHTML = `Feels-like: ${data.feelsLike} &#8451;`;

        if (data.temp >= 18) {
            let sunny = document.createElement('img');
            sunny.src = "../images/sunny.png";
            sunny.classList.add('weather-images');
            cityName.appendChild(sunny)
        }
        if (data.temp >= 7 && data.temp < 18) {
            let warm = document.createElement('img');
            warm.src = "../images/warm.png";
            warm.classList.add('weather-images');
            cityName.appendChild(warm)
        }
        if (data.temp < 7 && data.temp > 0) {
            let cold = document.createElement('img');
            cold.src = "../images/cold.png";
            cold.classList.add('weather-images');
            cityName.appendChild(cold)
        }
        if (data.temp < 0) {
            let freezing = document.createElement('img');
            freezing.src = "../images/freezing.png";
            freezing.classList.add('weather-images');
            cityName.appendChild(freezing)
        }

    }

    return {
        displayWeather
    }
    

})();

export default display;