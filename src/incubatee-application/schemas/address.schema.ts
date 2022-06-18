import { Prop, Schema } from '@nestjs/mongoose'

@Schema()
export class Address {
  @Prop()
  pincode: number

  @Prop()
  house: string

  @Prop()
  street: string

  @Prop()
  city: string

  @Prop()
  state: string

  @Prop()
  country: string
}
