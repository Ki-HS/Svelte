import { serializeNonPOJOs } from '$lib/utils.js';
import { error } from '@sveltejs/kit';

export const load = ({ locals, params }) => {
	const getProject = async (projectId) => {
		try {
			const project = serializeNonPOJOs(await locals.pb.collection('projects').getOne(projectId));
			return project;
		} catch (err) {
			console.log(err);
			throw error(err.status, err.message);
		}
	};
	return {
		project: getProject(params.projectId)
	};
};
