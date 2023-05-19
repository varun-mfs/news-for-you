import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './controllers/user.controller';
import { AppService } from './app.service';
import { UserService } from './services/user.service';
import { UserRepository } from './dao/user.repository';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, UserRepository, PrismaService],
})
export class AppModule {}
