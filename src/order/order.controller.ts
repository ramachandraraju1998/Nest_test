import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDTO } from './dtos/create-order.dto';

@Controller('store/order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get('/')
  async getorders() {
    const allorders = await this.orderService.getAllOrders();
    return allorders;
  }

  @Get('/:id')
  async getorder(@Param('id') id: string) {
    const order = await this.orderService.getOrder(id);
    if (!order) throw new NotFoundException('order does not exist!');
    return order;
  }

  @Post('/')
  async addorder(@Body() CreateOrderDTO: CreateOrderDTO) {
    const order = await this.orderService.addOrder(CreateOrderDTO);
    return order;
  }

  
}
