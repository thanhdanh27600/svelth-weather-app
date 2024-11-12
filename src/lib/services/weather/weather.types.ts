export interface City {
	name: string;
	latitude: number;
	longitude: number;
}

export interface WeatherData {
	temperature: number;
	time: string;
}

export interface WeatherError {
	message: string;
	code?: string;
}
