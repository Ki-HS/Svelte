import { generateUseranme } from '$lib/utils.js';
import { error, redirect } from '@sveltejs/kit';

export const actions = {
	register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		let username = generateUseranme(body.name.split(' ').join('')).toLowerCase();
		console.log({ username, ...body });
		try {
			await locals.pb.collection('users2').create({ username, ...body });
			await locals.pb.collection('users2').requestVerification(body.email);
		} catch (err) {
			console.log(err);
			throw error(500, 'Something wrong');
		}

		throw redirect(303, 'login');
	}
};
