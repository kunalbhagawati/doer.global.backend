import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { DevelopmentStage } from '../../enums'
import { FundingDetails } from './funding-details.schema'
import { BusinessModelAndRevenueDetails } from './business-model-and-revenue-details.schema'
import { CoFounder } from '../../empoyee/co-founder.schema'
import mongoose, { Document } from 'mongoose'
import { CompanyDetails } from './company-details.schema'

/**
 * The company/entity that is going into the incubator.
 */
@Schema()
export class Startup {
  @Prop()
  name: string

  @Prop()
  website: string

  // TODO redundant field. Details can be found out from funding, business model, etc.
  @Prop()
  startupDescription: string

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: CoFounder }] })
  coFounders: CoFounder[]

  @Prop()
  team: StartupTeam

  @Prop()
  developmentStage: keyof typeof DevelopmentStage

  @Prop()
  fundingDetails: FundingDetails

  @Prop()
  businessModelAndRevenueDetails: BusinessModelAndRevenueDetails

  @Prop()
  productDemo: string // url here

  /**
   * Any links, references that share an insight into the startup and/or co-founders.
   */
  @Prop([String])
  supportingLinks: string[]

  /**
   * Links to showcase any awards, media recognition, etc.
   */
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

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: CompanyDetails })
  companyDetails: CompanyDetails
}

export type StartupDocument = Startup & Document
export const StartupSchema = SchemaFactory.createForClass(Startup)
