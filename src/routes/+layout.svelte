<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-gray-50">
	<header class="bg-white shadow">
		<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold text-gray-900">Weather App</h1>
		</div>
	</header>

	<main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
		{@render children()}
	</main>

	<footer class="bg-white shadow mt-auto">
		<div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-600">
			Weather data provided by Open Meteo
		</div>
	</footer>
</div>
