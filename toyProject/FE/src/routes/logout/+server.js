import { redirect } from '@sveltejs/kit';

export const POST = ({ locals }) => {
	//console.log(locals);
	locals.pb.authStore.clear();
	locals.user = undefined;

	throw redirect(303, '/');
};
