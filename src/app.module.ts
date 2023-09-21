import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // 1.1 Import the mongoose module
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module'; // 2.1 Import the product module
import { OrderModule } from './order/order.module'; // 2.1 Import the product module
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/store'), // 1.2 Setup the database
    ProductModule,
    OrderModule, // 2.2 Add the product module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
