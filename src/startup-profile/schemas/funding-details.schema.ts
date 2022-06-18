import { Prop, Schema } from '@nestjs/mongoose'
import { FundingStage } from '../../enums'
import { AngelInfo } from './angel-info.schema'

@Schema()
export class FundingDetails {
  @Prop()
  angelInfo: AngelInfo

  @Prop()
  fundingStage: keyof typeof FundingStage

  @Prop()
  bootstrapRunwayMonths: number

  @Prop([String])
  investors: string[]

  @Prop()
  fundingDate: Date

  @Prop()
  fundingAmount: number
}
