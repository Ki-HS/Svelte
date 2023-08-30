import { z } from 'zod';

export const loginUserSchema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Email must be a valid email' }),

	password: z.string({ required_error: 'Password is required' })
});

export const registerUserSchema = z
	.object({
		name: z
			.string({ required_error: 'Name is required' })
			.regex(/^[a-zA-z\s]*$/, { message: 'Name can only contain letters and spaces.' })
			.min(2, { message: 'Name must be at least 2 character' })
			.max(64, { message: 'Name must be less than 64 character' })
			.trim(),
		email: z
			.string({ required_error: 'Email is required' })
			.email({ message: 'Email must be a valid email' }),

		password: z
			.string({ required_error: 'Password is required' })
			.regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%?*&])[A-za-z\d!@#$%?*&]{8,}$/, {
				message:
					'Password must be a minimum of 8 character and contain at least one letter, one number, and one special character.'
			}),
		passwordConfirm: z
			.string({ required_error: 'Password Confirm is required' })
			.regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%?*&])[A-za-z\d!@#$%?*&]{8,}$/, {
				message:
					'Password must be a minimum of 8 character and contain at least one letter, one number, and one special character.'
			})
	})
	.superRefine(({ passwordConfirm, password }, ctx) => {
		if (passwordConfirm !== password) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Password & Confirm password must match',
				path: ['password']
			});
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Password & Confirm password must match',
				path: ['passwordConfirm']
			});
		}
	});

const imageTypes = [
	'image/jpeg',
	'image/jpg',
	'image/png',
	'image/webp',
	'image/svg+xml',
	'image/gif'
];

export const createProjectSchema = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(2, { message: 'Name must be at least 2 letters' })
		.max(64, { message: 'Name must be less than 64 characters' }),
	tagline: z
		.string({ required_error: 'Tagline is required' })
		.min(2, { message: 'Tagline must be at least 2 letters' })
		.max(64, { message: 'Tagline must be less than 64 characters' }),
	url: z.string({ required_error: 'URL is required' }).url({ message: 'URL must be a valid URL' }),
	description: z
		.string({ required_error: 'Description is required' })
		.min(2, { message: 'Description must be at least 2 characters' })
		.max(512, { message: 'Description must be less than 512 characters' })
		.trim(),
	thumbnail: z
		.instanceof(Blob)
		.optional()
		.superRefine((val, ctx) => {
			if (val) {
				if (val.size > 5242880) {
					ctx.addIssue({
						code: z.ZodIssueCode.custom,
						message: 'Thumbnail must be less than 5MB'
					});
				}
				if (!imageTypes.includes(val.type)) {
					ctx.addIssue({
						code: z.ZodIssueCode.custom,
						message: 'Unsupported file type. Supported formats : jpeg, jpg, png, webp, svg, gif'
					});
				}
			}
		}),
	user: z.string({ required_error: 'User is required' })
});

export const updateProjectSchema = createProjectSchema.omit({ user: true });

export const updateEmailSchema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Email must be a valid email' })
});

export const updateUsernameSchema = z.object({
	username: z
		.string({ required_error: 'Username is required' })
		.min(2, { message: 'Username must be at least 2 letters' })
		.max(64, { message: 'Username must be less than 64 characters' })
		.regex(/^[a-zA-Z0-9]*$/, {
			message: 'Username must contain characters or numbers.'
		})
});

export const updatePasswordSchema = z
	.object({
		oldPassword: z.string({ required_error: 'Old password is required' }),
		password: z
			.string({ required_error: 'Old password is required' })
			.regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%?*&])[A-za-z\d!@#$%?*&]{8,}$/, {
				message:
					'Password must be a minimum of 8 character and contain at least one letter, one number, and one special character.'
			}),
		passwordConfirm: z
			.string({ required_error: 'Password Confirm is required' })
			.regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%?*&])[A-za-z\d!@#$%?*&]{8,}$/, {
				message:
					'Password must be a minimum of 8 character and contain at least one letter, one number, and one special character.'
			})
	})
	.superRefine(({ passwordConfirm, password }, ctx) => {
		if (passwordConfirm !== password) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Password & Confirm password must match',
				path: ['password']
			});
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Password & Confirm password must match',
				path: ['passwordConfirm']
			});
		}
	});

export const updateProfileSchema = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(2, { message: 'Name must be at least 2 characters' })
		.regex(/^[a-zA-Z0-9]&/, { message: 'Name must contain alphabets or numbers' }),
	avatar: z
		.instanceof(Blob)
		.optional()
		.superRefine((val, ctx) => {
			if (val) {
				if (val.size > 5242880) {
					ctx.addIssue({
						code: z.ZodIssueCode.custom,
						message: 'Avatar must be less than 5MB'
					});
				}
				if (!imageTypes.includes(val.type)) {
					ctx.addIssue({
						code: z.ZodIssueCode.custom,
						message: 'Unsupported file type. Supported formats : jpeg, jpg, png, webp, svg, gif'
					});
				}
			}
		})
});
