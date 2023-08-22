export const GET = async ({ params }) => {
	const res = await fetch(`http://dummyjson.com/posts/${params.postId}`);
	const data = await res.json();

	return new Response(JSON.stringify(data));
};
