<script lang="ts">
	export let data: import('./$types').PageData;
</script>

<main>
	<h1>SvelteKit & Supabase Auth</h1>
	{#if data.session}
		<p>Welcome, {data.session.user.email}</p>
	{:else}
		<div class="auth-button">
			<a href="/login" class="btn btn-primary">Login</a>
			<a href="/register" class="btn btn-primary">Register</a>
		</div>
	{/if}
</main>
