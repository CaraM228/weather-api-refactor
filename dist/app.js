"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const weatherContainer = document.getElementById("weather-card-container");
if (weatherContainer) {
    weatherContainer.innerHTML =
        `<article class="weather-card bg-white border border-black rounded-lg shadow-2xl p-4 text-center">
            <h2 class="day text-blue-800 font-bold">Monday</h2>
            <p class="date">date</p>
            <img class="weather-icon mx-auto w-16 h-16" alt="Weather icon">
            <p class="temp">15°c</p>
            <p class="condition">Clear skies</p>
        </article>
		<article class="weather-card bg-white border border-black rounded-lg shadow-2xl p-4 text-center">
            <h2 class="day text-blue-800 font-bold">Monday</h2>
            <p class="date">date</p>
            <img class="weather-icon mx-auto w-16 h-16" alt="Weather icon">
            <p class="temp">15°c</p>
            <p class="condition">Clear skies</p>
        </article>
		<article class="weather-card bg-white border border-black rounded-lg shadow-2xl p-4 text-center">
            <h2 class="day text-blue-800 font-bold">Monday</h2>
            <p class="date">date</p>
            <img class="weather-icon mx-auto w-16 h-16" alt="Weather icon">
            <p class="temp">15°c</p>
            <p class="condition">Clear skies</p>
        </article>`;
}
//# sourceMappingURL=app.js.map