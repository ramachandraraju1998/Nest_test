import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose'; // 1. Import mongoose module
import { OrderSchema } from './schemas/order.schema'; // 2. Import product schema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]), // 3. Setup the mongoose module to use the Order schema
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
