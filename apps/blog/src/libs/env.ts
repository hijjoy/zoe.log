import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.url(),
  DATABASE_URL: z.url(),
  DIRECT_URL: z.url(),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  DATABASE_URL: process.env.DATABASE_URL,
  DIRECT_URL: process.env.DIRECT_URL,
});
