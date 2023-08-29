import { authenticateUser } from '$lib/server/auth';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = authenticateUser(event);

	console.log(event.locals.user);
	return resolve(event);
};
