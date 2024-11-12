<script lang="ts">
	import CitySelector from '$lib/components/weather/CitySelector.svelte';
	import WeatherDisplay from '$lib/components/weather/WeatherDisplay.svelte';
	import { DEFAULT_CITY } from '$lib/constants/cities';
	import { weatherStore } from '$lib/services/stores/weather.store';
	import { WeatherService } from '$lib/services/weather/weather.service';
	import type { City } from '$lib/services/weather/weather.types';
	import { onMount } from 'svelte';

	async function handleCitySelect(city: City) {
		try {
			weatherStore.setLoading(true);
			const data = await WeatherService.getCurrentWeather(city);
			weatherStore.setData(data);
		} catch (e) {
			weatherStore.setError({
				message: e instanceof Error ? e.message : 'An unknown error occurred'
			});
		} finally {
			weatherStore.setLoading(false);
		}
	}

	onMount(() => {
		handleCitySelect(DEFAULT_CITY);
	});

	$: ({ data, error, isLoading } = $weatherStore);
</script>

<main class="max-w-lg mx-auto p-4">
	<h1 class="text-2xl font-bold mb-4">Weather App</h1>

	<CitySelector onCitySelect={handleCitySelect} />

	<WeatherDisplay {data} {error} {isLoading} />
</main>
