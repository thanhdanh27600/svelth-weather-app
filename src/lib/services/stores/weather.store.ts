import {writable} from "svelte/store";
import type {WeatherData, WeatherError} from "../weather/weather.types";

function createWeatherStore() {
	const {subscribe, set, update} = writable<{
		data: WeatherData | null;
		error: WeatherError | null;
		isLoading: boolean;
	}>({
		data: null,
		error: null,
		isLoading: false,
	});

	return {
		subscribe,
		setData: (data: WeatherData) =>
			update((state) => ({...state, data, error: null})),
		setError: (error: WeatherError) =>
			update((state) => ({...state, error, data: null})),
		setLoading: (isLoading: boolean) =>
			update((state) => ({...state, isLoading})),
		reset: () => set({data: null, error: null, isLoading: false}),
	};
}

export const weatherStore = createWeatherStore();
