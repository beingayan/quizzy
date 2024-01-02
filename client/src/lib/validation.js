
import { z } from 'zod';



export const signupSchema = z.object({
    firstName: z.string().trim().min(3, { message: "Must be 3 or more characters long" }),
    lastName: z.string().trim().min(3, { message: "Must be 3 or more characters long" }),
    email: z.string().email(),
    password: z.string().min(8, 'Password must be at least 8 characters long').regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
        'Password must contain at least one digit, one lowercase and one uppercase letter, and one special character'
    ),

});