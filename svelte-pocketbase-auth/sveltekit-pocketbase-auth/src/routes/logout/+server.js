import { redirect } from '@sveltejs/kit';

export const POST = ({ locals }) => {
	//console.log(locals);
	locals.pb.authStore.clear();
	throw redirect(303, '/login');
};
