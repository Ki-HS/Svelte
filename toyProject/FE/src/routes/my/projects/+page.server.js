import { serializeNonPOJOs } from '$lib/utils.js';
import { error, redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}

	const getUserProjects = async (userId) => {
		try {
			const projects = serializeNonPOJOs(
				await locals.pb.collection('projects').getFullList(undefined, {
					filter: `user="${userId}"`
				})
			);
			return projects;
		} catch (err) {
			console.log(err);
			throw error(err.status, err.message);
		}
	};
	return {
		projects: getUserProjects(locals.user.id)
	};
};

export const actions = {
	deleteProject: async ({ locals, request }) => {
		const { id } = Object.fromEntries(await request.formData());
		try {
			await locals.pb.collection('projects').delete(id);
		} catch (err) {
			console.log(err);
			throw error(err.status, err.message);
		}

		return {
			success: true
		};
	}
};
