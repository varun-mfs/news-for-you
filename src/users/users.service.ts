import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  // CreateUserDto,
  LoginUserDto,
  // UpdatePasswordDto,
} from './users.user.dto';
// import { compare, hash } from 'bcrypt'
import { PrismaService } from '../prisma.service';
// import { PrismaService } from "../prisma.service";
import { User } from '@prisma/client';

interface FormatLogin extends Partial<User> {
  email: string;
}

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  //use by user module to change user password
  // async updatePassword(payload: UpdatePasswordDto, id: number):
  //   Promise<User> {
  //   const user = await this.prisma.user.findUnique({
  //     where: { id }
  //   });
  //   if (!user) {
  //     throw new HttpException("invalid_credentials",
  //       HttpStatus.UNAUTHORIZED);
  //   }
  //   // compare passwords
  //   const areEqual = await compare(payload.old_password,
  //     user.password);
  //   if (!areEqual) {
  //     throw new HttpException("invalid_credentials",
  //       HttpStatus.UNAUTHORIZED);
  //   }
  //   return await this.prisma.user.update({
  //     where: { id },
  //     data: { password: await hash(payload.new_password, 10) }
  //   });
  // }
  // //use by auth module to register user in database
  // async create(userDto: CreateUserDto): Promise<any> {

  //   // // check if the user exists in the db
  //   const userInDb = await this.prisma.user.findFirst({
  //     where: { login: userDto.login }
  //   });
  //   if (userInDb) {
  //     throw new HttpException("user_already_exist",
  //       HttpStatus.CONFLICT);
  //   }
  //   return await this.prisma.user.create({
  //     ...(userDto),
  //     role: "CLIENT" as const,
  //     password: await hash(userDto.password, 10)
  //   });
  // }
  //use by auth module to login user
  async findByLogin({ email, password }: LoginUserDto): Promise<FormatLogin> {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new HttpException('invalid_credentials', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords using bcrypt
    // const areEqual = await compare(password, user.password);

    // if (!areEqual) {
    //   throw new HttpException("invalid_credentials",
    //     HttpStatus.UNAUTHORIZED);
    // }
    if (password !== user.password) {
      throw new HttpException('invalid_credentials', HttpStatus.UNAUTHORIZED);
    }

    const { password: pass, ...rest } = user;
    return rest;
  }

  //use by auth module to get user in database
  async findByPayload({ email }: any): Promise<any> {
    return await this.prisma.user.findFirst({
      where: { email },
    });
  }
}
