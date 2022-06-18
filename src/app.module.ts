import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { IncubateeApplicationModule } from './incubatee-application/incubatee-application.module'
import { mongooseModule } from './mongoose.module'
import { configModule } from './config.module'

@Module({
  imports: [configModule, mongooseModule, IncubateeApplicationModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
