import {apiClient, ApiError} from "../api/api-client";
import type {City, WeatherData} from "./weather.types";

const BASE_URL = "https://api.open-meteo.com/v1";

export class WeatherService {
	static async getCurrentWeather(city: City): Promise<WeatherData> {
		try {
			const response = await apiClient<any>(
				`${BASE_URL}/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m`
			);

			return {
				temperature: response.current.temperature_2m,
				time: response.current.time,
			};
		} catch (error) {
			if (error instanceof ApiError) {
				throw new Error(`Failed to fetch weather: ${error.message}`);
			}
			throw error;
		}
	}
}
