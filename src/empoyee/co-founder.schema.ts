import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { EducationalQualification, Gender, MaritalStatus } from '../enums'
import { Address } from '../startup-profile/schemas/address.schema'
import { Document } from 'mongoose'

/**
 * The person/people who started the {@link Startup}
 */
@Schema()
export class CoFounder {
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

  /**
   * Why is this person suited to be a co-founder in the startup?
   * Personal and professional Background context w.r.t this question.
   */
  @Prop()
  founderJourney: string
}

export type CoFounderDocument = CoFounder & Document
export const CoFounderSchema = SchemaFactory.createForClass(CoFounder)
