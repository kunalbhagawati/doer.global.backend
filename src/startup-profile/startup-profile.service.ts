import { Injectable } from '@nestjs/common'
import { UpdateStartupProfileDto } from './dto/update-startup-profile.dto'

@Injectable()
export class StartupProfileService {
  findAll() {
    return `This action returns all startupApplication`
  }

  findOne(id: number) {
    return `This action returns a #${id} startupApplication`
  }

  update(id: number, dto: UpdateStartupProfileDto) {
    return `This action updates a #${id} startupApplication`
  }

  remove(id: number) {
    return `This action removes a #${id} startupApplication`
  }
}
