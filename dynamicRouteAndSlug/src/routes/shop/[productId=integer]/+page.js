export const load = ({ fetch, params }) => {
    console.log(params);

    const fetchProducts = async (id) => {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        return data;
    };
    return {
        product: fetchProducts(params.productId),
    };
};
