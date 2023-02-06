
const weather = (() => {

    function weatherData(data) {

        let weatherData = {
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            temp: data.main.temp,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min
        };

        console.log(weatherData.temp_min, weatherData.temp_max)
        
    }

    async function getWeather(cityName) {
        try {
            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d3ec4866c4270e5095e1511ffb1bd78&units=metric`, {mode:'cors'});
            let weather = weatherData(await response.json())
            return weather
        } catch(err) {
            alert(err)
        }
    };

    return {
        getWeather
    }

})();

export default weather;