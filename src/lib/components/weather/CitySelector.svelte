<script lang="ts">
	import { AVAILABLE_CITIES } from '$lib/constants/cities';
	import type { City } from '$lib/services/weather/weather.types';

	export let onCitySelect: (city: City) => void;

	let selectedCity: City = AVAILABLE_CITIES[0];

	function handleChange() {
		onCitySelect(selectedCity);
	}
</script>

<select bind:value={selectedCity} on:change={handleChange} class="p-2 border rounded-md w-full">
	{#each AVAILABLE_CITIES as city}
		<option value={city}>
			{city.name}
		</option>
	{/each}
</select>
