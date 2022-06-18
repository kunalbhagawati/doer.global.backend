import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule, ConfigService } from '@nestjs/config'

export const mongooseModule = MongooseModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],

  useFactory: async (config: ConfigService) => {
    const { host, port, username, password, database } = config.get('mongo')

    return {
      // For some reason, mongoose expects `authSource=admin` to be passed
      uri: `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`,
    }
  },
})
