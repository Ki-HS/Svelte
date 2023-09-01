import { createClient } from '@supabase/auth-helpers-sveltekit';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';

export const supabaseClient = createClient(
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY
	// , {
	// 	db: {
	// 		schema: 'svelte'
	// 	},
	// 	auth: {
	// 		storage: AsyncStorage,
	// 		autoRefreshToken: true,
	// 		persistSession: true,
	// 		detectSessionInUrl: true
	// 	},
	// 	realtime: {
	// 		channels,
	// 		endpoint
	// 	},
	// 	global: {
	// 		fetch: customFetch,
	// 		headers: DEFAULT_HEADERS
	// 	}
	// }
);
