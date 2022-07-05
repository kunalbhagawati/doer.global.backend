import { Prop, Schema } from '@nestjs/mongoose'

@Schema()
export class StartupTeam {
  @Prop()
  numCoFounders: number

  @Prop()
  hasActingCTO: boolean

  @Prop()
  numFullTimeEmployees: number

  /**
   * How are the co-founders acquainted?
   */
  @Prop()
  coFounderRelationship: string
}
