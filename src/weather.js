
const weather = (() => {

    async function getWeather(cityName) {

        try {
            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d3ec4866c4270e5095e1511ffb1bd78`, {mode:'cors'});
            let weather = await response.json()
            console.log(weather)
        } catch(err) {
            alert(err)
        }
    };

    return {
        getWeather
    }

})();

export default weather;