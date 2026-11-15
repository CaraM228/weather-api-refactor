const weatherUrl = "https://api.weatherapi.com/v1/forecast.json?key=bba6bfabf09e47e886940311262410&q=Calgary&days=3&aqi=no&alerts=no";
let celsius = true;
let darkMode = false;
const weatherContainer = document.getElementById("weather-card-container");
//Async Function
async function getWeather() {
    try {
        const loading = document.getElementById("loading-message");
        if (loading) {
            loading.textContent = "Loading...";
        }
        const response = await fetch(weatherUrl);
        if (!response.ok) {
            throw new Error("Error! Weather data could not be loaded.");
        }
        const data = await response.json();
        const errorMessage = document.getElementById("error-message");
        if (errorMessage) {
            errorMessage.textContent = "";
        }
        const forecastDays = data.forecast.forecastday;
        if (weatherContainer) {
            weatherContainer.innerHTML = "";
            forecastDays.forEach((day) => {
                weatherContainer.innerHTML += `
                    <article class="weather-card bg-white dark:bg-slate-800 border border-black dark:border-slate-600 rounded-lg shadow-2xl p-4 text-center">
                    <h2 class="day text-blue-800 dark:text-blue-300 font-bold">${new Date(day.date).toLocaleDateString("en-US", {
                    weekday: "long"
                })}</h2>
                    <p class="date text-black dark:text-white">${day.date}</p>
                    <img
                        src="https:${day.day.condition.icon}"
                        alt="${day.day.condition.text}"
                        class="weather-icon mx-auto w-16 h-16"
                        >
                        <p class="temp text-black dark:text-white">${celsius ? day.day.avgtemp_c : day.day.avgtemp_f} ${celsius ? "°C" : "°F"}</p>
                        <p class="condition text-black dark:text-white">${day.day.condition.text}</p>
                        </article>
                        `;
            });
            if (loading) {
                loading.textContent = "";
            }
        }
    }
    catch (error) {
        const errorMessage = document.getElementById("error-message");
        if (errorMessage) {
            errorMessage.textContent = "Weather forecast data could not be loaded. Please try again.";
        }
        console.error(error);
    }
}
//Toggle button function
const toggleBtn = document.getElementById("toggle-btn");
toggleBtn?.addEventListener("click", () => {
    celsius = !celsius;
    toggleBtn.textContent = `Viewing: ${celsius ? "°C" : "°F"}`;
    getWeather();
});
//Dark/light mode button
const modeBtn = document.getElementById("mode-btn");
if (modeBtn) {
    modeBtn.textContent = "Mode: Light";
}
modeBtn?.addEventListener("click", () => {
    darkMode = !darkMode;
    if (darkMode) {
        document.body.style.backgroundColor = "grey";
        modeBtn.textContent = "Mode: Dark";
    }
    else {
        document.body.style.backgroundColor = "skyblue";
        modeBtn.textContent = "Mode: Light";
    }
});
getWeather();
export {};
//# sourceMappingURL=app.js.map