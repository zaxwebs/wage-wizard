<script>
	import '../app.postcss'
	import Sidebar from '$lib/components/Sidebar.svelte'
</script>

<div class="flex min-h-screen">
	<Sidebar />
	<slot />
</div>
