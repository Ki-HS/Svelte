import { handleLoginRedirect } from "$lib/utils"
import { redirect } from "@sveltejs/kit"

export const load = async (event) => {
	if (!event.locals.user) {
		console.log(event.url)
		throw redirect(302, handleLoginRedirect(event))
	}
}
