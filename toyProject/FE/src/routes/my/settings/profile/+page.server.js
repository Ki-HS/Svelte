import { updateProfileSchema } from '$lib/schemas.js';
import { validateData } from '$lib/utils.js';
import { error, fail } from '@sveltejs/kit';
import { serialize } from 'object-to-formdata';

export const actions = {
	updateProfile: async ({ locals, request }) => {
		let data = await request.formData();
		const userAvatar = data.get('avatar');

		if (userAvatar.size === 0) {
			data.delete('avatar');
		}
		const { formData, errors } = await validateData(data, updateProfileSchema);
		const { avatar, ...rest } = formData;
		if (errors) {
			return fail(400, {
				data: rest,
				errors: errors.fieldErrors
			});
		}
		//console.log(data);
		try {
			const { name, avatar } = await locals.pb
				.collection('users')
				.update(locals?.user?.id, serialize(formData));

			locals.user.name = name;
			locals.user.avatar = avatar;
		} catch (err) {
			console.log(err.response.data.avatar);
			throw error(400, 'Something Wrong');
		}
		return {
			success: true
		};
	}
};
