import { loginUserSchema } from '$lib/schemas.js';
import { validateData } from '$lib/utils.js';
import { error, redirect, fail } from '@sveltejs/kit';

export const actions = {
	login: async ({ locals, request }) => {
		const { formData, errors } = await validateData(await request.formData(), loginUserSchema);
		console.log(errors);
		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors
			});
		}

		try {
			await locals.pb.collection('users').authWithPassword(formData.email, formData.password);
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
