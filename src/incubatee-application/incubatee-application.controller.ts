import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { IncubateeApplicationService } from './incubatee-application.service'
import { CreateIncubateeApplicationDto } from './dto/create-incubatee-application.dto'
import { UpdateIncubateeApplicationDto } from './dto/update-incubatee-application.dto'

@Controller('startup-application')
export class IncubateeApplicationController {
  constructor(private readonly startupApplicationService: IncubateeApplicationService) {}

  @Post()
  create(@Body() dto: CreateIncubateeApplicationDto) {
    return this.startupApplicationService.create(dto)
  }

  @Get()
  findAll() {
    return this.startupApplicationService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.startupApplicationService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateIncubateeApplicationDto) {
    return this.startupApplicationService.update(+id, dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.startupApplicationService.remove(+id)
  }
}
