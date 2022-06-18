import { PartialType } from '@nestjs/mapped-types'
import { CreateIncubateeApplicationDto } from './create-incubatee-application.dto'

export class UpdateIncubateeApplicationDto extends PartialType(CreateIncubateeApplicationDto) {}
