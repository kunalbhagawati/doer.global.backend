import { Module } from '@nestjs/common'
import { StartupProfileController } from './startup-profile.controller'
import { StartupProfileService } from './startup-profile.service'

@Module({
  controllers: [StartupProfileController],
  providers: [StartupProfileService],
})
export class StartupProfileModule {}
