import { ConfigModule } from '@nestjs/config'
import { EnvConfigSchema } from './config/env-config.schema'
import { Config } from './config/types'

const validate = (config: Record<string, unknown>): Config => {
  const parsedConfig = EnvConfigSchema.parse(config)

  return {
    mongo: {
      host: parsedConfig.MONGO_HOST,
      port: parsedConfig.MONGO_PORT,
      username: parsedConfig.MONGO_USERNAME,
      password: parsedConfig.MONGO_PASSWORD,
      database: parsedConfig.MONGO_DATABASE,
    },
    postgres: {
      host: parsedConfig.POSTGRES_HOST,
      port: parsedConfig.POSTGRES_PORT,
      username: parsedConfig.POSTGRES_USERNAME,
      password: parsedConfig.POSTGRES_PASSWORD,
      database: parsedConfig.POSTGRES_DATABASE,
    },
  }
}

export const configModule = ConfigModule.forRoot({ validate })
