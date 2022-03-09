const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind");

searchBtn.addEventListener("click", async () => {
    const location = document.getElementById("search").value;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=aaac8290bc8f6b69e94cd98f1491fee6`, {mode: "cors"});
    const searchResults = convertData(await response.json());
    cityName.textContent = `${searchResults.cityName}`;
    temperature.textContent = `Temperature: ${searchResults.temperature}° F`;
    feelsLike.textContent = `Feels Like: ${searchResults.feelsLike}° F`;
    humidity.textContent = `Humidity: ${searchResults.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${searchResults.windSpeed} mph`;
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



