<script>
    export let data;
    console.log(data);
    const product = data.product;
</script>

<h1>{product.title}</h1>
<p>{product.description}</p>
<p>{product.price}</p>