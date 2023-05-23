import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }
  @Get('/create')
  async createUser(): Promise<User> {
    return await this.userService.createUser();
  }
}
