// import { MikroOrmModule } from '@mikro-orm/nestjs'
// import { ConfigModule, ConfigService } from '@nestjs/config'
// import { Platform, TextType, Type } from '@mikro-orm/core'
//
// export const mikroOrmModule = MikroOrmModule.forRootAsync({
//   imports: [ConfigModule],
//   inject: [ConfigService],
//
//   useFactory: async (config: ConfigService) => {
//     const host = config.get<string>('POSTGRES_HOST')
//     const port = config.get<string>('POSTGRES_PORT')
//     const username = config.get<string>('POSTGRES_USERNAME')
//     const password = config.get<string>('POSTGRES_PASSWORD')
//     const dbname = config.get<string>('POSTGRES_DATABASE')
//
//     return {
//       entities: ['../dist/entities'],
//       entitiesTs: ['../src/entities'],
//       type: 'postgresql',
//       discovery: {
//         getMappedType(type: string, platform: Platform) {
//           // override the mapping for string properties only
//           if (type === 'string') return Type.getType(TextType)
//
//           return platform.getDefaultMappedType(type)
//         },
//       },
//       host: host,
//       port: port,
//       user: username,
//       pass: password,
//       dbName: dbname,
//     }
//   },
// })
