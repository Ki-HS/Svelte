import { error, redirect } from '@sveltejs/kit';

export const actions = {
	updatePassword: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').update(locals.user.id, data);
			locals.pb.authStore.clear();
		} catch (err) {
			console.log(err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/login');
	}
};
