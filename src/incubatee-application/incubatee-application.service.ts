import { Injectable } from '@nestjs/common'
import { CreateIncubateeApplicationDto } from './dto/create-incubatee-application.dto'
import { UpdateIncubateeApplicationDto } from './dto/update-incubatee-application.dto'

@Injectable()
export class IncubateeApplicationService {
  create(dto: CreateIncubateeApplicationDto) {
    return 'This action adds a new startupApplication'
  }

  findAll() {
    return `This action returns all startupApplication`
  }

  findOne(id: number) {
    return `This action returns a #${id} startupApplication`
  }

  update(id: number, dto: UpdateIncubateeApplicationDto) {
    return `This action updates a #${id} startupApplication`
  }

  remove(id: number) {
    return `This action removes a #${id} startupApplication`
  }
}
