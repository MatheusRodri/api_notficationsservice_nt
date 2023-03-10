import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';
import { Body, Controller, Get,Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list(){
    return this.prisma.notification.findMany();
  }
  @Post()
  create(@Body() body:CreateNotificationBody){
    const {recipientId, content, category} = body;
    return this.prisma.notification.create({
      data:{
        id:randomUUID(),
        content,
        category,
        recipientId,
      } 
    });
  }
}
