<script lang="ts">
	import type { WeatherData, WeatherError } from '$lib/services/weather/weather.types';
	import ErrorMessage from '../shared/ErrorMessage.svelte';
	import LoadingSpinner from '../shared/LoadingSpinner.svelte';

	export let data: WeatherData | null;
	export let error: WeatherError | null;
	export let isLoading: boolean;
</script>

{#if isLoading}
	<LoadingSpinner />
{:else if error}
	<ErrorMessage message={error.message} />
{:else if data}
	<div class="mt-4">
		<h2 class="text-xl font-bold">Current Weather</h2>
		<p class="mt-2">Temperature: {data.temperature}°C</p>
		<p class="text-sm text-gray-600">
			Last updated: {new Date(data.time).toLocaleString()}
		</p>
	</div>
{/if}
