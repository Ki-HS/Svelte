<script lang=ts>
	import type {PageData} from "./$types"
	export let data: PageData
</script>

<main>
	<h1>SvelteKit Hooks</h1>
	{#if data.user}
		<p>Welcome, {data.user.email}</p>	
	{:else}
		<div class="button-container">
			<form action="?/login" method="POST">
				<button type="submit" class="btn btn-primary">Login</button>
			</form>
			<a href="/protected" class="btn btn-secondary">Protected</a>
		</div>


	{/if}
</main>