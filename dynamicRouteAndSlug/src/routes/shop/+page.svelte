<script>
    export let data;
    const {products} =data;
    const {users} = data;
</script>

<slot/>
{#each products as product}
    <h2><a href= "/shop/{product.id}" data-sveltekit-prefetch>{product.title}</a></h2>
    <p>{product.description}</p>
{/each}

{#each users as user}
    <h3>{user.username}</h3>
{/each}