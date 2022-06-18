import { Prop, Schema } from '@nestjs/mongoose'
import { BusinessModelTransactionType, BusinessSolutionType, RevenueModel } from '../../enums'

@Schema()
export class BusinessModelAndRevenueDetails {
  @Prop()
  businessSolutionType: keyof typeof BusinessSolutionType

  @Prop()
  customerPainPoint: string

  @Prop()
  solutionDefinition: string

  @Prop()
  howWillSolutionScaleBusiness: string

  @Prop()
  extraCommentsOnSolution: string

  @Prop()
  businessModelTransactionType: keyof typeof BusinessModelTransactionType

  @Prop()
  revenueModel: keyof typeof RevenueModel

  @Prop()
  revenueModelDescription: string

  @Prop()
  revenueGenerated: number
}
