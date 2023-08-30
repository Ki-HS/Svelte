import { createProjectSchema } from '$lib/schemas.js';
import { validateData } from '$lib/utils.js';
import { error, fail, redirect } from '@sveltejs/kit';
import { serialize } from 'object-to-formdata';

export const load = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}
};

export const actions = {
	create: async ({ locals, request }) => {
		const body = await request.formData();

		const thumbnail = body.get('thumbnail');
		if (thumbnail.size === 0) {
			body.delete('thumbnail');
		}
		body.append('user', locals.user.id);

		const { formData, errors } = await validateData(body, createProjectSchema);
		const { thumb, ...rest } = formData;
		if (errors) {
			return fail(400, {
				data: rest,
				errors: errors.fieldErrors
			});
		}

		try {
			await locals.pb.collection('projects').create(serialize(formData));
		} catch (err) {
			console.log(err);
			throw error(err.status, err.message);
		}

		throw redirect(303, '/my/projects');
	}
};
