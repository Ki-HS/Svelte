import { updatePasswordSchema } from '$lib/schemas.js';
import { validateData } from '$lib/utils.js';
import { error, fail, redirect } from '@sveltejs/kit';

export const actions = {
	updatePassword: async ({ locals, request }) => {
		const { formData, errors } = await validateData(await request.formData(), updatePasswordSchema);

		if (errors) {
			return fail(400, {
				errors: errors.fieldErrors
			});
		}

		try {
			await locals.pb.collection('users').update(locals.user.id, formData);
			locals.pb.authStore.clear();
		} catch (err) {
			console.log(err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/login');
	}
};
