import { z } from 'zod';

export const signInSchema = z.object({
    identifier:z.string(),//username or email
    password:z.string()


})