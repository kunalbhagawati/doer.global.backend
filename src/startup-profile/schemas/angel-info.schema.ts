import { Prop } from '@nestjs/mongoose'

export class AngelInfo {
  @Prop([String])
  investors: string[]

  @Prop()
  amount: number

  @Prop()
  finalizedOn: boolean
}
