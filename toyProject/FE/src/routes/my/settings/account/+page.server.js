import { error } from '@sveltejs/kit';

export const actions = {
	updateEmail: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());
		console.log(locals);
		try {
			await locals.pb.collection('users2').requestEmailChange(data.email);
		} catch (err) {
			console.log(err.response);
			throw error(err.status, err.message);
		}

		return {
			success: true
		};
	}
};
