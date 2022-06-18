import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { StartupStage } from '../../enums'
import { FundingDetails } from './funding-details.schema'
import { BusinessModelAndRevenueDetails } from './business-model-and-revenue-details.schema'
import { CoFounder } from '../../empoyee/co-founder.schema'
import { Document } from 'mongoose'

/**
 * The company/entity that is going into the incubator.
 */
@Schema()
export class Startup {
  @Prop()
  coFounders: CoFounder[]

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

export type StartupDocument = Startup & Document
export const StartupSchema = SchemaFactory.createForClass(Startup)
