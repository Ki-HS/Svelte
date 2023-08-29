<script lang="ts">
	import type { PageData } from './$types';
	import {createSearchStore, searchHandler} from '$lib/stores/search'
	import { onDestroy } from 'svelte';
	export let data: PageData;

	type Product ={
		title:string;
		description:string;
		brand:string;
		category:string;
		searchTerms:string;
	}

	const searchProducts : Product[] = data.products.map((product:Product)=>({
		...product,
		searchTerms: `${product.title} ${product.description} ${product.brand} ${product.category}` 
	}))

	const searchStore= createSearchStore(searchProducts)

	const unsubscribe = searchStore.subscribe((model)=>searchHandler(model))

	onDestroy(()=>{
		unsubscribe();
	})

</script>

<div class="container">
	<h1>Search/Filter</h1>
	<input type="search" placeholder="Search..." bind:value={$searchStore.search} />
</div>
<div class="product-grid">
	{#each $searchStore.filtered as product}
	<div>
		<h2>{product.title}</h2>
		<p>{product.description}</p>
		<p class="badge">{product.category}</p>
		<p>{product.brand}</p>
	</div>
	{/each}
</div>
<style>
	.container {
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 1.5rem;
	}
</style>
