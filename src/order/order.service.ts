import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './schemas/Order.schema';
import { CreateOrderDTO } from './dtos/create-Order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order')
    private readonly OrderModel: Model<OrderDocument>,
  ) {}

  async getAllOrders(): Promise<Order[]> {
    const Orders = await this.OrderModel.find().exec();
    return Orders;
  }

  async getOrder(id: string): Promise<Order> {
    const Order = await this.OrderModel.findById(id).exec();
    return Order;
  }

  async addOrder(createOrderDTO: CreateOrderDTO): Promise<Order> {
    const newOrder = await this.OrderModel.create(createOrderDTO);
    return newOrder.save();
  }

}
