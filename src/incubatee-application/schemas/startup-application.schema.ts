import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { FounderDetails } from './founder-details.schema'
import { StartupDetails } from './startup-details.schema'

@Schema()
class StartupApplication {
  @Prop()
  founderDetails: FounderDetails

  @Prop()
  startupDetails: StartupDetails
}

export type StartupApplicationDocument = StartupApplication & Document

export const StartupApplicationSchema = SchemaFactory.createForClass(StartupApplication)
