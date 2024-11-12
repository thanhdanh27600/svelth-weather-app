import type {City, WeatherData} from "../weather/weather.types";

export async function fetchWeather(city: City): Promise<WeatherData> {
	const response = await fetch(
		`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m`
	);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const data = await response.json();
	return {
		temperature: data.current.temperature_2m,
		time: data.current.time,
	};
}
