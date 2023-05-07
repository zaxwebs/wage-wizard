<script>
	import '../app.postcss'
	import Sidebar from '$lib/components/Sidebar.svelte'
</script>

<div class="flex min-h-screen dark:bg-gray-900">
	<Sidebar />
	<div class="flex-1">
		<slot />
	</div>
</div>
