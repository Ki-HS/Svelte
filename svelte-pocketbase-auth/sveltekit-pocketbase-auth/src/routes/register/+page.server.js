import PocketBase from 'pocketbase';
import { redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};

export const actions = {
	register: async ({ locals, request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			const pb = new PocketBase('http://127.0.0.1:8090');
			const createdRecord = await pb.collection('users').create(data);
			console.log(createdRecord);

			pb.authStore.clear();
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				message: err
			};
		}

		throw redirect(303, '/login');
	}
};
