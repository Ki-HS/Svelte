import { error, redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users2').authWithPassword(body.email, body.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true
				};
			}
		} catch (err) {
			console.log(err);
			throw error(500, 'Something wrong');
		}

		throw redirect(303, '/');
	}
};
