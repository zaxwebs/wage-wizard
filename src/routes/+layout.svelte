<script>
	import '../app.postcss'
	import Sidebar from '$lib/components/Sidebar.svelte'
</script>

<div class="flex min-h-screen">
	<Sidebar />
	<div class="flex-1">
		<slot />
	</div>
</div>
