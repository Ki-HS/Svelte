import { z } from 'zod';

const registerSchema = z.object({
	name: z
		.string({ required_error: '이름 적어' })
		.min(2, { message: '너무 짧아' })
		.max(64, { message: '너무 길어' })
		.trim(),
	email: z.string().min(1).max(64).email(),
	password: z.string().min(5).max(32).trim(),
	passwordConfirm: z.string().min(5).max(32).trim(),
	terms: z.enum(['on'])
});

export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		try {
			const result = registerSchema.parse(formData);
			console.log('SUCCESS');
			console.log(result);
		} catch (err) {
			const { fieldErrors: errors } = err.flatten();
			const { password, passwordConfirm, ...rest } = formData;
			return {
				data: rest,
				errors
			};
		}
	}
};
