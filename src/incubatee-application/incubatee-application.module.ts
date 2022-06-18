import { Module } from '@nestjs/common'
import { IncubateeApplicationService } from './incubatee-application.service'
import { IncubateeApplicationController } from './incubatee-application.controller'

@Module({
  controllers: [IncubateeApplicationController],
  providers: [IncubateeApplicationService],
})
export class IncubateeApplicationModule {}
