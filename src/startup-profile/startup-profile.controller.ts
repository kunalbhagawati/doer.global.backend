import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common'
import { StartupProfileService } from './startup-profile.service'
import { UpdateStartupProfileDto } from './dto/update-startup-profile.dto'

@Controller('startup-application')
export class StartupProfileController {
  constructor(private readonly startupProfileService: StartupProfileService) {}

  @Get()
  findAll() {
    return this.startupProfileService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.startupProfileService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateStartupProfileDto) {
    return this.startupProfileService.update(+id, dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.startupProfileService.remove(+id)
  }
}
