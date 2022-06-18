import { z } from 'zod'

export const EnvConfigSchema = z.object({
  // Mongo
  MONGO_HOST: z.string().default('127.0.0.1'),
  MONGO_PORT: z.number().default(27017),
  MONGO_USERNAME: z.string(),
  MONGO_PASSWORD: z.string(),
  MONGO_DATABASE: z.string(),

  // Postgres
  POSTGRES_HOST: z.string().default('127.0.0.1'),
  POSTGRES_PORT: z.number().default(5432),
  POSTGRES_USERNAME: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DATABASE: z.string(),
})
