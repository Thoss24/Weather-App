import weather from "./weather";

const display = (() => {

    function displayWeather() {
        console.log(weather)
    }

    return {
        displayWeather
    }
    

})();

export default display;