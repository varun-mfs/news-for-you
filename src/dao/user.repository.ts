import { Injectable } from '@nestjs/common';
// import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  // async getAllUsers(): Promise<User[]> {
  //   // return this.prisma.article.findMany({ where: { published: true } });
  //   return await this.prismaService.user.findMany({});
  // }
}
