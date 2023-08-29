import PocketBase from 'pocketbase';
import { redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};

export const actions = {
	login: async ({ locals, request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			const pb = new PocketBase('http://127.0.0.1:8090');
			const userData = await pb.collection('users').authWithPassword(data.email, data.password);
			locals.pb = pb;
			//console.log(locals.user);
			//console.log(userData);
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				email: data.email
			};
		}

		throw redirect(303, '/');
	}
};
