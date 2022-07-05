import { Prop, Schema } from '@nestjs/mongoose'
import { Address } from './address.schema'

@Schema()
export class CompanyDetails {
  /**
   * Registered legal name of the company
   */
  @Prop()
  name: string

  /**
   * Official email id to contact the company.
   */
  @Prop()
  emailId: string

  /**
   * Official phone number to contact the company.
   */
  @Prop()
  phoneNumber: string

  @Prop()
  isLegal: boolean

  @Prop()
  isNonProfit: boolean

  @Prop()
  CIN: string

  @Prop()
  yearOfIncorporation: Date

  @Prop()
  registeredAddress: Address

  @Prop()
  hqAddress: Address

  @Prop()
  equityBreakdown: EquityBreakdown

  @Prop()
  authorizedCapital: AuthorizedCapital

  @Prop([String])
  currentDirectors: string[]
}
