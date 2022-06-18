import { Prop, Schema } from '@nestjs/mongoose'
import { StartupStage } from './enums'
import { FundingDetails } from './funding-details.schema'
import { BusinessModelAndRevenueDetails } from './business-model-and-revenue-details.schema'

@Schema()
export class StartupDetails {
  @Prop()
  name: string

  @Prop()
  website: string

  @Prop()
  startupDescription: string

  @Prop()
  founderJourney: string

  @Prop()
  startupStage: keyof typeof StartupStage

  @Prop()
  fundingDetails: FundingDetails

  @Prop()
  businessModelAndRevenueDetails: BusinessModelAndRevenueDetails

  @Prop()
  productDemo: string // url here

  @Prop([String])
  supportingLinks: string[]

  @Prop()
  startupRecognitionAward: string // url

  @Prop()
  existingPrototype: string

  @Prop()
  newPrototypeTimeToBuild?: number // in months

  // @Prop()
  // pitchDeck: string

  @Prop([String])
  focusAreas: string[]
}
