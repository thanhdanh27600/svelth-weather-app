import type {City} from "../services/weather/weather.types";

export const AVAILABLE_CITIES: City[] = [
	{name: "Hanoi", latitude: 21.0285, longitude: 105.8542},
	{name: "Ho Chi Minh City", latitude: 10.8231, longitude: 106.6297},
	{name: "Munich", latitude: 48.1351, longitude: 11.582},
];

export const DEFAULT_CITY = AVAILABLE_CITIES[0];
