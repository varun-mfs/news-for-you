import { Injectable } from '@nestjs/common';
import { UserRepository } from '../dao/user.repository';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  // getUsers(): string {
  async getUsers(): Promise<User[]> {
    // return 'Hello World!!';
    // return this.userService.getUsers();
    console.log('Inside user service');
    return await this.userRepository.getAllUsers();
  }
}
