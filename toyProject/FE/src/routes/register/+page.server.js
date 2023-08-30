import { registerUserSchema } from '$lib/schemas.js';
import { generateUseranme, validateData } from '$lib/utils.js';
import { error, fail, redirect } from '@sveltejs/kit';

export const actions = {
	register: async ({ locals, request }) => {
		const { formData, errors } = await validateData(await request.formData(), registerUserSchema);

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		let username = generateUseranme(formData.name.split(' ').join('')).toLowerCase();
		console.log({ username, ...formData });
		try {
			await locals.pb.collection('users').create({ username, ...formData });
			await locals.pb.collection('users').requestVerification(formData.email);
		} catch (err) {
			console.log(err);
			throw error(500, 'Something wrong');
		}

		throw redirect(303, 'login');
	}
};
