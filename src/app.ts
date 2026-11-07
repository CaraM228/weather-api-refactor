const weatherUrl = "https://api.weatherapi.com/v1/forecast.json?key=bba6bfabf09e47e886940311262410&q=Calgary&days=3&aqi=no&alerts=no"

let celsius: boolean = true;

const weatherContainer = document.getElementById("weather-card-container");

if(weatherContainer){
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
        </article>`
}
//Async Function
async function getWeather(): Promise<void> {
		const response = await fetch(weatherUrl);

		if(!response.ok){
			throw new Error("Error! Weather data could not be loaded.");
		}

		const data = await response.json();
		console.log(data);
	}

	getWeather();