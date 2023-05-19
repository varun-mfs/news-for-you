import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';
// import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get('/all')
  // async getUsers(): Promise<User[]> {
  //   return await this.userService.getUsers();
  // }
}
