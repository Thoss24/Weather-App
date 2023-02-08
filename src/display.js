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
        const bodyArea = document.getElementById('main-body');
        const weatherInfo = document.querySelectorAll('.weather-info');
        const check = document.getElementById('checkbox');

        if (check.checked) {
            cityName.innerHTML = searchCity.value.charAt(0).toUpperCase() + searchCity.value.slice(1)
            temp.innerHTML = `Temperature <br> <br> ${data.temp} &#8451;`;
            humidity.innerHTML = `Humidity <br> <br> ${data.humidity} %`;
            minTemp.innerHTML = `Min-temp <br> <br> ${data.temp_min} &#8451;`;
            maxTemp.innerHTML = `Max-temp <br> <br> ${data.temp_max} &#8451;`;
            feelsLike.innerHTML = `Feels-like <br> <br> ${data.feelsLike} &#8451;`;
        };

        if (!check.checked) {
            cityName.innerHTML = searchCity.value.charAt(0).toUpperCase() + searchCity.value.slice(1)
            temp.innerHTML = `Temperature <br> <br> ${data.temp} &#8457;`;
            humidity.innerHTML = `Humidity <br> <br> ${data.humidity} %`;
            minTemp.innerHTML = `Min-temp <br> <br> ${data.temp_min} &#8457;`;
            maxTemp.innerHTML = `Max-temp <br> <br> ${data.temp_max} &#8457;`;
            feelsLike.innerHTML = `Feels-like <br> <br> ${data.feelsLike} &#8457;`;
        };

        function forEachDiv() {
            weatherInfo.forEach((div) => {
                div.classList.add('weather-info-visible')
            });
        };

        if (data.temp >= 18) {
            let sunny = document.createElement('img');
            sunny.src = "../images/sunny.png";
            sunny.classList.add('weather-images');
            bodyArea.classList = 'sunny-weather';
            cityName.appendChild(sunny)
            forEachDiv()
        };
        if (data.temp >= 7 && data.temp < 18) {
            let warm = document.createElement('img');
            warm.src = "../images/warm.png";
            warm.classList.add('weather-images');
            bodyArea.classList = 'warm-weather';
            cityName.appendChild(warm)
            forEachDiv()
        };
        if (data.temp < 7 && data.temp > 0) {
            let cold = document.createElement('img');
            cold.src = "../images/cold.png";
            cold.classList.add('weather-images');
            bodyArea.classList = 'cold-weather';
            cityName.appendChild(cold)
            forEachDiv()
        };
        if (data.temp < 0) {
            let freezing = document.createElement('img');
            freezing.src = "../images/freezing.png";
            freezing.classList.add('weather-images');
            bodyArea.classList = 'freezing-weather';
            cityName.appendChild(freezing)
            forEachDiv()
        };

    }

    return {
        displayWeather
    }
    

})();

export default display;