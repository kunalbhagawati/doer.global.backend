import { Prop, Schema } from '@nestjs/mongoose'

@Schema()
export class Employee {
  @Prop()
  name: string

  @Prop()
  designation: string
}
