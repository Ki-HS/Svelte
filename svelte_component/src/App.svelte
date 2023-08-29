<script>
	export let name;
	let src = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGz29o%2FbtrNgcGtBfI%2FbzaUnvh0SXlevptFhvYfwK%2Fimg.png";
	import MainPage from "./mainPage.svelte";
	import ProductPage from "./productPage.svelte";
</script>

<MainPage/>
<img {src} alt="야옹이"/>
<hr/>
<ProductPage/>