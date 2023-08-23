export const load = ({ locals }) => {
	console.log('locals', locals);
	if (locals.user) {
		return JSON.parse(JSON.stringify(locals.user));
	}
};
