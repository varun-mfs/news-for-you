import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './controllers/user.controller';
import { AppService } from './app.service';
import { UserService } from './services/user.service';
import { UserRepository } from './dao/user.repository';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, UserController, AuthController],
  providers: [
    AppService,
    UserService,
    UserRepository,
    PrismaService,
    AuthService,
    UsersService,
  ],
})
export class AppModule {}
