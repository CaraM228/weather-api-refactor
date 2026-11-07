const weatherUrl = "https://api.weatherapi.com/v1/forecast.json?key=bba6bfabf09e47e886940311262410&q=Calgary&days=3&aqi=no&alerts=no";
let celsius = true;
const weatherContainer = document.getElementById("weather-card-container");
//Async Function
async function getWeather() {
    const response = await fetch(weatherUrl);
    if (!response.ok) {
        throw new Error("Error! Weather data could not be loaded.");
    }
    const data = await response.json();
    const forecastDays = data.forecast.forecastday;
    if (weatherContainer) {
        weatherContainer.innerHTML = "";
        forecastDays.forEach((day) => {
            weatherContainer.innerHTML += `
                    <article class="weather-card bg-white border border-black rounded-lg shadow-2xl p-4 text-center">
                    <h2 class="day text-blue-800 font-bold">${new Date(day.date).toLocaleDateString("en-US", {
                weekday: "long"
            })}</h2>
                    <p class="date">${day.date}</p>
                    <img
                        src="https:${day.day.condition.icon}"
                        alt="${day.day.condition.text}"
                        class="weather-icon mx-auto w-16 h-16"
                        >
                        <p class="temp">${celsius ? day.day.avgtemp_c : day.day.avgtemp_f} ${celsius ? "°C" : "°F"}</p>
                        <p class="condition">${day.day.condition.text}</p>
                        </article>
                        `;
        });
    }
}
//Toggle button function
const toggleBtn = document.getElementById("toggle-btn");
toggleBtn?.addEventListener("click", () => {
    celsius = !celsius;
    toggleBtn.textContent = `Viewing: ${celsius ? "°C" : "°F"}`;
    getWeather();
});
getWeather();
export {};
//# sourceMappingURL=app.js.map