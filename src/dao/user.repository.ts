import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    // return this.prisma.article.findMany({ where: { published: true } });
    return await this.prismaService.user.findMany({});
  }

  async createUser(): Promise<User> {
    // return this.prisma.article.findMany({ where: { published: true } });
    const user: Prisma.UserCreateInput = {
      name: 'varun',
      email: 'testuser@gmail.com',
      password: 'admin',
    };
    return await this.prismaService.user.create({ data: user });
  }
}
