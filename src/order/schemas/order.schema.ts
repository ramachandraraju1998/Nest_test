import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ProductModel  {
  @Prop()
  productid: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  category: string;
}



export type OrderDocument = Order & Document;

@Schema({
  timestamps: true,
})
export class Order {
  @Prop()
  orderaddress: string;

  @Prop({ type: ProductModel })
  productdetails: ProductModel;

}

export const OrderSchema = SchemaFactory.createForClass(Order);