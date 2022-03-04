const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");

searchBtn.addEventListener("click", async () => {
    const location = document.getElementById("search").value;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=aaac8290bc8f6b69e94cd98f1491fee6`, {mode: "cors"});
    const searchResults = convertData(await response.json());
    cityName.textContent = `${searchResults.cityName}`;
    return searchResults;
});

function convertData(data) {
    const {
        name: cityName,
        main: {temp: temperature, feels_like: feelsLike, humidity},
        wind: {speed: windSpeed},
    } = data;
    return {cityName, temperature, feelsLike, humidity, windSpeed};
}



