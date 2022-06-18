import { Prop, Schema } from '@nestjs/mongoose'
import { EducationalQualification, Gender, MaritalStatus } from './enums'
import { Address } from './address.schema'

@Schema()
export class FounderDetails {
  @Prop()
  name: string

  @Prop()
  email: string

  @Prop()
  phone: string

  @Prop()
  linkedIn: string

  @Prop()
  dateOfBirth: Date

  @Prop()
  gender: keyof typeof Gender

  @Prop()
  maritalStatus: keyof typeof MaritalStatus

  @Prop()
  address: Address

  @Prop()
  educationalQualification: keyof typeof EducationalQualification

  @Prop()
  workExperienceMonths: number

  @Prop()
  roleInCompany: string
}
